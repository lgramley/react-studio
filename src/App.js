import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
// import BakeryItem from "./assets/bakery-item.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [cartItems, setCartItems] = useState([])
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function calcTotal() {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price
    }
    return total;
  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem item={item} addToCart={addToCart} />
      ))}

      <div>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
          <div>
            <p>{item.name}</p>
            {/* Total: 
            {Object.entries()} */}
            <p>{item.price}</p>
            <h2>total: {calcTotal()}</h2>


          </div>

        ))}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;

