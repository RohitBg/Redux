import React from "react";

function Cart(props) {
  const { data } = props;
  return (
    <div className="home">
      <h1>Cart</h1>

      {data.itemName}
      {data.itemQtn}
    </div>
  );
}

export default Cart;
