import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100;
  justify-content: space-between;
  padding: 10px 10px 0px 10px;
`;
const RemoveButton = styled.button`
  cursor: pointer;
`;

function removeFromCart(info) {
  var removeJobList = [...info.cartList];
  removeJobList = removeJobList.filter((item) => item.name !== info.name);
  info.updateCartList(removeJobList);
}

const CartItem = (props) => {
  return (
    <StyledItem>
      <span>{props.name}</span>
      <span>{props.price}</span>
      <span>{props.quantity}</span>
      <RemoveButton
        onClick={() => {
          removeFromCart(props);
        }}
      >
        Remove
      </RemoveButton>
    </StyledItem>
  );
};

export default CartItem;
