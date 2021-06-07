import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartStyle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 500px;
  width: 500px;
  border: 1px solid ${(props) => props.primaryColor};
  background-color: ${(props) => props.secondaryColor};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
  margin-top: 10%;
  cursor: pointer;
`;

const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20%;
  width: 65%;
`;

const TotalPrice = styled.span`
  margin-top: 40px;
`;

const Cart = (props) => {
  var priceTotal = 0;
  props.cartList.forEach((item) => {
    let itemPrice = item.price * item.quantity;
    priceTotal = priceTotal + itemPrice;
  });
  if (!props.showCart) {
    return null;
  }
  return (
    <CartStyle
      primaryColor={props.currentTheme.primaryColor}
      secondaryColor={props.currentTheme.secondaryColor}
    >
      <CartHeader>
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
      </CartHeader>
      {props.cartList.map((item) => {
        return (
          <CartItem
            cartList={props.cartList}
            updateCartList={props.updateCartList}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.id}
          />
        );
      })}
      <TotalPrice>Total Price: ${priceTotal.toFixed(2)}</TotalPrice>
      <CloseButton
        onClick={() => {
          props.updateShowCart(false);
        }}
      >
        Close Cart
      </CloseButton>
    </CartStyle>
  );
};

export default Cart;
