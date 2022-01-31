import React, { useState } from 'react';
import Data from "../data.json"
import Header from './header';
import HeaderTwo from './headerTwo';
import AllCards from './allCards';
import Bottom from './bottom';



function FraazoWeb() {
  const { products } = Data;
  const allCategories = [...new Set(products.map((item) => item.head))];
  console.log(products)
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (e) => {
    const exist = cartItems.find((x) => x.id === e.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === e.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...e, qty: 1 }]);
    }
  };

  const onRemove = (e) => {
    const exist = cartItems.find((x) => x.id === e.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== e.id)
      );
    } else {
      setCartItems(cartItems.map((x) =>
        x.id === e.id ? { ...exist, qty: exist.qty - 1 } : x
      ))

    }
  };
  return (
    <div style={{backgroundColor:"rgba(242, 242, 242, 1)"}}>
      <Header />
      <HeaderTwo  />
      <AllCards onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} products={products}  />
      <Bottom />
    </div>
  );
}

export default FraazoWeb;

