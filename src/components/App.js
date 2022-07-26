import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [lightMode, setlightMode] = useState(false);
  const [isDark, setisDark] = useState(false);
  const [item, setitem] = useState(itemData);  
  

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

 

  function lightModeActivated() {
    setlightMode((lightMode)=> !lightMode);
  }
  

  return (
    <div className={"App "+(lightMode? "dark": "light")}>
      <header>
        <h2>Shopster</h2>

        <button onClick={lightModeActivated}>{lightMode? "Dark Mode": "Light Mode"}</button>
       
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
