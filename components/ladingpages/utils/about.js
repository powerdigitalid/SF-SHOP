import React from "react";

export default function About() {
  return (
    <div>
      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Tentang Kami</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Kami menyediakan Produk kecantikan terbaik</h4>
                <p>
                 Setiap produk yang kami distribusikan adalah produk yang terjamin keasliannya. Tidak hanya itu, kami juga menyediakan produk dengan harga yang terjangkau. Kami juga menyediakan produk yang sedang trend saat ini.
                </p>
                <ul className="featured-list">
                  <h4>Produk yang kami sediakan</h4>
                  <li>
                    - Skincare (Toner, Serum, Moisturizer, Sunscreen, dll)
                  </li>
                  <li>
                    - Bodycare (Body Lotion, Body Butter, Body Scrub, dll)
                  </li>
                  <li>
                    - Makeup (Foundation, Concealer, Eyeshadow, dll)
                  </li>
                  <li>
                    - Haircare (Shampoo, Conditioner, Hair Mask, dll)
                  </li>
                  <li>
                  - Bath medicine (Sabun, Shampoo, dll)
                  </li>
                </ul>
                <a href="#" className="filled-button">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="/dist/img/banner/banner-4.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
