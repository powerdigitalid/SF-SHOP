import React, { useState, useEffect } from "react";
// import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import useStore from "../../../store/store";
import Swal from "sweetalert2";
// import { fetchData } from "next-auth/client/_utils";

export default function Chart() {
  const { data: session, status } = useSession();
  const [cart, setCart] = useState([]);
  const [totals, setTotals] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      fetchData();
    }
  }, [session]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/chart/getUserCart?user_google=` + session.user.email
      );
      const data = await res.json();
      console.log(data);
      if (data && data.length >= 0) {
        setCart(filterAndSumByProductId(data));
        calculateTotal(filterAndSumByProductId(data));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };

  const filterAndSumByProductId = (arr) => {
    let filteredItems = {};
    arr.forEach((item) => {
      const { id, user_google, product, quantity, total } = item;
      const productId = product.id;
      if (filteredItems.hasOwnProperty(productId)) {
        // Jika product_id sudah ada, tambahkan quantity dan total
        filteredItems[productId].quantity += quantity;
        filteredItems[productId].total += total;
      } else {
        // Jika product_id belum ada, buat entri baru
        filteredItems[productId] = {
          id: id,
          user_google: user_google,
          product: {
            id: product.id,
            product_name: product.product_name,
            product_price: product.product_price,
          },
          quantity,
          total,
        };
      }
    });
    // Mengembalikan array hasil filter dan penjumlahan
    return Object.values(filteredItems);
  };

  const handleUpdateQtybyId = (e, id, quantity) => {
    e.preventDefault();
    let newCart = [...cart];
    let item = newCart.find((item) => item.id === id);
    item.quantity = quantity;
    item.total = item.product.product_price * quantity;
    // replace item in new cart
    let index = newCart.findIndex((item) => item.id === id);
    newCart[index] = item;
    setCart(newCart);
    calculateTotal(newCart);
  };

  const calculateTotal = (cartData) => {
    let totalAmount = 0;
    cartData.forEach((item) => {
      totalAmount += item.total;
    });
    setTotals(totalAmount);
  };

  const handleDelete = (id) => {
    fetch(`/api/chart/delete?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          Swal.fire("Berhasil hapus");
          router.replace("/ladingpage/chart");
          fetchData();
          // window.location.reload();
        } else {
          Swal.fire("Gagal hapus");
          console.log(res);
        }
        // window.location.reload();
      });
  };

  const handleClear = () => {
    setCart([]);
    setTotals(0);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    let insert = [];
    cart.forEach((item) => {
      insert.push({
        id: item.id,
        user_google: session.user.email,
        product: { ...item.product },
        quantity: item.quantity,
        total: item.total,
      });
    });
    console.log({ insert: insert });
    if (session && session.user) {
      fetch("/api/order/cart?type=bulk", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ insert: insert }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            Swal.fire({
              icon: "success",
              title: "Checkout Success",
              text: "Thank you for your order",
              showConfirmButton: false,
              timer: 1500,
            });
            handleClear();
            router.push("/ladingpage/chart/order");
          } else {
            Swal.fire({
              title: "Are you sure?",
              text: "You want to logout from this session?",
              icon: "warning",
              showCancelButton: true,
            });
            console.log(res);
          }
        });
    }
  };

  return (
    <div className="container-fluid pt-5" id="chart">
      {/* Render cart items */}
      {cart.length > 0 ? (
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <h3>{cart.length} Items in Cart</h3>
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src="/landingpage/img/product-1.jpg"
                        alt=""
                        style={{ width: 50 }}
                      />
                      {item.product.product_name}
                    </td>
                    <td>{item.product.product_price}</td>
                    <td>
                      <div className="input-group quantity mx-auto">
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-minus"
                            onClick={(e) =>
                              handleUpdateQtybyId(e, item.id, item.quantity - 1)
                            }
                          >
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={item.quantity}
                          readOnly
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-plus"
                            onClick={(e) =>
                              handleUpdateQtybyId(e, item.id, item.quantity + 1)
                            }
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>{item.total}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleDelete(item.id)}
                      >
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">
                  Ringkasan Pemesanan
                </h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Total</h6>
                  <h6 className="font-weight-medium">Rp.{totals}</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total Semua</h5>
                  <h5 className="font-weight-bold">Rp. {totals}</h5>
                </div>
                <button
                  className="btn btn-block btn-primary my-3 py-3"
                  onClick={handleCheckout}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}