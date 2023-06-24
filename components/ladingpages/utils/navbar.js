import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Navbar() {
  const { data: session, status } = useSession();

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      if (session && session.user) {
        const res = await fetch(
          "/api/chart/getUserCart?user_google=" + session.user.email
        );
        const data = await res.json();
        setCart(data);
        setQuantity(data.reduce((a, b) => a + b.quantity, 0));
      }
    };
    setInterval(() => {
      fetchData();
    }, 3000);
  }, [session]);

  if (session) {
    return (
      <div>
        {/* <nav className=" navbar-expand-lg  bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2 className="text-white">SF Shop</h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <a className="nav-link text-white" href="index.html" >Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="products.html">Produk</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="about.html">Tentang Kami</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
        <div class="topbar">
          <div class="container">
            <div class="row align-items-center">
              <div class="">
                <div class="top-start">
                  <div class="user">
                    <i class="lni lni-user"></i>Hallo Gais | Selamat Datang di
                    Website SF Shop | Terimakasih Telah Berkunjung dan Membeli
                    Produk Kami
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav d-flex">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header mt-1">
            <div className="">
              <div className="">
                <img
                  src="/dist/img/logo/logo2.png"
                  className=""
                  style={{ width: "70px", height: "70px" }}
                  alt="slide"
                />
              </div>
            </div>
          </div>
          <div className="nav-links" style={{marginTop:"12px"}}>
            <a href="#" target="_blank">
              Home
            </a>
            <a href="#" target="_blank">
              Produk
            </a>
            <a href="#" target="_blank">
              Tentang Kami
            </a>
            <a href="#" target="_blank">
              Contact Us
            </a>
          </div>
          {/* <div>
          <a href="#" className="btn btn-outline-success mt-2 ml-3">
            Login
          </a>
        </div> */}
          <div>
            <Link
              href={`/ladingpage/chart?user_google=${session?.user?.email}`}
              className="btn btn-outline-success ml-1"
              style={{marginTop:"20px"}}
            >
              Cart {cart.length} <i className="lni lni-cart-full" />
            </Link>
          </div>
          <div>
            <button
              onClick={() => signOut()}
              className="btn btn-outline-success ml-3"
              style={{marginTop:"20px"}}
            >
              Sign Out
            </button>
          </div>
          <div className=" ml-auto mr-3" style={{marginTop:"14px"}}>
            <div className="">
              <img
                src={session.user.image}
                alt="user"
                className="rounded-circle"
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {/* <nav className=" navbar-expand-lg  bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2 className="text-white">SF Shop</h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <a className="nav-link text-white" href="index.html" >Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="products.html">Produk</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="about.html">Tentang Kami</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
        <div class="topbar">
          <div class="container">
            <div class="row align-items-center">
              <div class="">
                <div class="top-start">
                  <div class="user">
                    <i class="lni lni-user"></i>Hallo Gais | Selamat Datang di
                    Website SF Shop | Terimakasih Telah Berkunjung dan Membeli
                    Produk Kami
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header ">
            <div className="nav-title">
              <img
                src="/dist/img/logo/logo2.png"
                className=""
                style={{ width: "70px", height: "70px" }}
                alt="slide"
              />
            </div>
          </div>
          <div className="nav-links" style={{marginTop:"12px"}}>
            <a href="#" target="_blank">
              Home
            </a>
            <a href="#" target="_blank">
              Produk
            </a>
            <a href="#" target="_blank">
              Tentang Kami
            </a>
            <a href="#" target="_blank">
              Contact Us
            </a>
          </div>
          <div>
            <a
              onClick={() => signIn()}
              className="btn btn-outline-success ml-3"
              style={{marginTop:"20px"}}
            >
              Login
            </a>
          </div>
          <div>
            <Link
              href="/ladingpage/chart"
              className="btn btn-outline-success ml-1"
              style={{marginTop:"20px"}}
            >
              Cart <i className="lni lni-cart-full" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
