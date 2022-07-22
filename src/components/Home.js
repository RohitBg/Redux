import React, { useState } from "react";
import Cart from "./Cart";
function Home() {
  const [count, setCount] = useState("00");
  const [item, setItem] = useState("enter your item here");
  const [send, setSend] = useState(null);

  const sendData = () => {
    setSend({
      itemName: item,
      itemQtn: count
    });
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <input
        type="text"
        value={item}
        onFocus={() => setItem("")}
        onChange={(e) => setItem(e.target.value)}
      />

      <input
        type="number"
        value={count}
        onFocus={() => setCount("")}
        onChange={(e) => setCount(e.target.value)}
      />

      <button onClick={sendData}>add to cart</button>
      <Cart data={send !== null && send} />
    </div>
  );
}

export default Home;
