import React from "react";

export default function Backtotop() {
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <button
        onClick={() => topFunction()}
        className="btn btn-primary"
        id="myBtn"
        title="Go to top"
      >
        Top
      </button>
    </div>
  );
}
