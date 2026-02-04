import React from "react";
import "./shop.css";


import Products from "../../components/products/Products";
import More from "../../components/more/More";

function Shop() {
  return (
    <>
    <div className="shopBox">
        <h2 className="shopPage">Shop Page</h2>
        <p className="miniShopPage">Let’s design the place you always imagined.</p>
      </div>
    <div className="container">
      <More/>
      <button className="shopPageBtn">You Like</button>
    </div>
    </>
    
  );
}

export default Shop;
