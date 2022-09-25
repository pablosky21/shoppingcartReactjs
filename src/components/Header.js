import React from "react";

export const Header = ({ countCartItems }) => {
    
  return (
   
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
      {console.log(countCartItems)}
        <a href="#/cart">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}{" "}
        </a>{" "}
        {""}
        <a href="#/signin">SignIn </a>
      </div>
    </header>
  );
};
