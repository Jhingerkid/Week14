import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const MenuDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: auto;
  height: 65%;
  width: 60%;
  border: 5px solid black;
  background-color: ${(props) => props.secondaryColor};
`;

const Menu = (props) => {
  if (Object.keys(props.restaurantMenu).length === 0) {
    return null;
  }
  let menuList = props.restaurantMenu;
  return (
    <MenuDisplay secondaryColor={props.currentTheme.secondaryColor}>
      {menuList.map((item) => {
        return (
          <MenuItem
            currentTheme={props.currentTheme}
            cartList={props.cartList}
            updateCartList={props.updateCartList}
            itemInfo={item}
            key={item.id}
            data={props.data}
          />
        );
      })}
    </MenuDisplay>
  );
};

export default Menu;
