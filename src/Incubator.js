import { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import styled from "styled-components";
import data from "./restaurantdata";
import Menu from "./components/Menu";
import CartButton from "./components/CartButton";
import Cart from "./components/Cart";

const Application = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-image: url("https://styledme.com/wp-content/uploads/2020/08/star-wars-cantina-zoom-background.jpg");
`;

function App() {
  const [currentRestaurant, updateRestaurant] = useState("");
  const [currentTheme, updateTheme] = useState({});
  const [restaurantMenu, updateMenu] = useState({});
  const [showCart, updateShowCart] = useState(false);
  const [cartList, updateCartList] = useState([]);
  useEffect(() => {
    menuChange(updateMenu, currentRestaurant);
  }, [currentRestaurant]);
  return (
    <Application>
      <Dropdown
        data={data}
        updateRestaurant={updateRestaurant}
        updateTheme={updateTheme}
        currentTheme={currentTheme}
      />
      <Menu
        currentTheme={currentTheme}
        data={data}
        cartList={cartList}
        updateCartList={updateCartList}
        restaurantMenu={restaurantMenu}
      />
      <CartButton updateShowCart={updateShowCart} />
      <Cart
        currentTheme={currentTheme}
        cartList={cartList}
        updateCartList={updateCartList}
        updateShowCart={updateShowCart}
        showCart={showCart}
      />
    </Application>
  );
}

function menuChange(updateMenu, currentRestaurant) {
  if (currentRestaurant === "") {
    return;
  }
  let newMenu = data.filter((info) => info.name === currentRestaurant);
  updateMenu(newMenu[0].menu);
}

export default App;
