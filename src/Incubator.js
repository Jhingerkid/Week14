import { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

import data from "./restaurantdata";

function App() {
  const [currentRestaurant, updateRestaurant] = useState("");
  const [currentTheme, updateTheme] = useState({});
  // useEffect(() => {}, [currentRestaurant]);
  return (
    <main>
      <Dropdown
        data={data}
        updateRestaurant={updateRestaurant}
        updateTheme={updateTheme}
      />
    </main>
  );
}

export default App;
