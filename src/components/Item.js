import React, { useState } from "react";


function Item({ name, category }) {

  const [inCart, setinCart] = useState(false);

  function handleClick(){
    setinCart((inCart)=>!inCart);
  }
  return (
    <li className={(inCart? "in-cart":"")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart? "Add to cart" : "Remove from cart"}</button>
    </li>
  );
}

export default Item;
