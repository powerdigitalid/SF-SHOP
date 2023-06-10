import React from 'react'
import { useState, useEffect } from "react";
// import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
export default function Product() {
    // const { data: session, status } = useSession();
  const [cart, setCart] = useState({});
  // const [order, setOrder] = useState([]);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleProduct = () => {
    fetch('/api/produk/all', {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    handleProduct();
  }, []);
  return (
    <div>
    <div className="latest-products">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>Latest Products</h2>
                            <a href="products.html">view all products <i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    {data.length > 0 ? data.map((prod, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="product-item">
                            <a href="#"><img src={prod.product_img} alt /></a>
                            <div className="down-content">
                                <a href="#"><h4>{prod.product_name}</h4></a>
                                <h5 className='mb-3'>Rp. {prod.product_price}</h5>
                                <p>{prod.product_desc}</p>
                                <button type="button" className="btn btn-sm btn-primary">Add to Cart</button>
                                <button type="button" className="btn btn-sm btn-danger ml-2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    )) : <h3 className="text-center">Belum ada produk</h3>}
                    {/* <div className="col-md-4">
                        <div className="product-item">
                            <a href="#"><img src="/dist/img/ladingpage/product_02.jpg" alt /></a>
                            <div className="down-content">
                                <a href="#"><h4>Tittle goes here</h4></a>
                                <h5 className='mb-3'>Rp. 250.000</h5>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                <button type="button" className="btn btn-sm btn-primary">Add to Cart</button>
                                <button type="button" className="btn btn-sm btn-danger ml-2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <a href="#"><img src="/dist/img/ladingpage/product_03.jpg" alt /></a>
                            <div className="down-content">
                                <a href="#"><h4>Tittle goes here</h4></a>
                                <h5 className='mb-3'>Rp. 250.000</h5>
                                <p>Sixteen Clothing is free CSS template provided by TemplateMo.</p>
                                <button type="button" className="btn btn-sm btn-primary">Add to Cart</button>
                                <button type="button" className="btn btn-sm btn-danger ml-2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <a href="#"><img src="/dist/img/ladingpage/product_04.jpg" alt /></a>
                            <div className="down-content">
                                <a href="#"><h4>Tittle goes here</h4></a>
                                <h5 className='mb-3'>Rp. 250.000</h5>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                <button type="button" className="btn btn-sm btn-primary">Add to Cart</button>
                                <button type="button" className="btn btn-sm btn-danger ml-2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <a href="#"><img src="/dist/img/ladingpage/product_05.jpg" alt /></a>
                            <div className="down-content">
                                <a href="#"><h4>Tittle goes here</h4></a>
                                <h5 className='mb-3'>Rp. 250.000</h5>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                <button type="button" className="btn btn-sm btn-primary">Add to Cart</button>
                                <button type="button" className="btn btn-sm btn-danger ml-2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <a href="#"><img src="/dist/img/ladingpage/product_06.jpg" alt /></a>
                            <div className="down-content">
                                <a href="#"><h4>Tittle goes here</h4></a>
                                <h5 className='mb-3'>Rp. 250.000</h5>
                                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                <button type="button" className="btn btn-sm btn-primary">Add to Cart</button>
                                <button type="button" className="btn btn-sm btn-danger ml-2">Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}
