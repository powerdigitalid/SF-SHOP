import React from "react";

export default function Banner() {
  return (
    <div>
      <div
        id="myCarousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="mask flex-center">
              <div className="container">
                <div className="row align-items-center" style={{marginTop:"135px"}}>
                  <div className="col-md-7 col-12 order-md-1 order-2">
                    <h4>SF Shop</h4>
                    <p>
                      Kami menyediakan berbagai macam produk skincare, bodycare, makeup, dan haircare yang terjamin keasliannya.
                    </p>
                    <br /> <a href="/#produk">Selengkapnya</a>
                  </div>
                  <div className="col-md-5 col-12 order-md-2 order-1">
                    <img
                      src="/dist/img/banner/banner-4.png"
                      className="mx-auto"
                      alt="slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}
