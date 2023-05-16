import Banner from "./banner";

export default function Navbar() {

  return (
    <div>
      <nav className=" navbar-expand-lg  bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2 className="text-white">SF Shop</h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <a className="nav-link text-white" href="index.html" >Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="products.html">Our Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="about.html">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Banner/>
    </div>


  )
}