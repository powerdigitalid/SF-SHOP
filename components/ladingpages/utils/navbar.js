import Banner from "./banner";

export default function Navbar() {
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
          <div className="nav-title">SF Shop</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
          <a href="//github.io/jo_geek" target="_blank">
            Home
          </a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            Produk
          </a>
          <a
            href="https://in.linkedin.com/in/jonesvinothjoseph"
            target="_blank"
          >
            Tentang Kami
          </a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">
            Contact Us
          </a>
        </div>
        <div>
          <button className="btn btn-outline-success mt-2 ml-3" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
