import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

import data from "./restaurantdata";

function App() {
  return (
    <main>
      <Dropdown data={data} />
    </main>
  );
}

export default App;
