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
  background-color: white;
  margin-bottom: 8%;
`;

const Menu = (props) => {
  if (Object.keys(props.restaurantMenu).length === 0) {
    return null;
  }
  let menuList = props.restaurantMenu;
  return (
    <MenuDisplay>
      {menuList.map((item) => {
        return <MenuItem itemInfo={item} />;
      })}
    </MenuDisplay>
  );
};

export default Menu;
