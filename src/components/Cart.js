import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartStyle = styled.span`
  position: fixed;
  height: 500px;
  width: 500px;
  border: 1px solid ${(props) => props.primaryColor};
  background-color: ${(props) => props.secondaryColor};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Cart = (props) => {
  console.log(props);
  if (!props.showCart) {
    return null;
  }
  return (
    <CartStyle
      primaryColor={props.currentTheme.primaryColor}
      secondaryColor={props.currentTheme.secondaryColor}
    >
      {props.cartList.map((item) => {
        return (
          <CartItem
            cartList={props.cartList}
            updateCartList={props.updateCartList}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
      <button
        onClick={() => {
          props.updateShowCart(false);
        }}
      >
        Close Cart
      </button>
    </CartStyle>
  );
};

export default Cart;
