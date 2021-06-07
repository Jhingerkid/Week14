import React, { useState } from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 10px 0px 10px;
`;
const RemoveButton = styled.button`
  color: ${(props) => (props.color === "true" ? "red" : "green")};
  cursor: pointer;
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 120px;
  width: 50%;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 5px 0px 0px;
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
`;

function removeFromCart(info, updateRemoval, confirmRemove) {
  if (confirmRemove) {
    var removeJobList = [...info.cartList];
    removeJobList = removeJobList.filter((item) => item.name !== info.name);
    info.updateCartList(removeJobList);
    return;
  } else {
    console.log("it updated");
    updateRemoval(true);
  }
}

const CartItem = (props) => {
  const [confirmRemove, updateRemoval] = useState(false);
  return (
    <StyledItem>
      <Box1>
        <span>{props.name}</span>
        <span>${props.price}</span>
      </Box1>
      <Box2>
        <span>{props.quantity}</span>
        <RemoveButton
          color={confirmRemove.toString()}
          onClick={() => {
            removeFromCart(props, updateRemoval, confirmRemove);
          }}
        >
          Remove
        </RemoveButton>
      </Box2>
    </StyledItem>
  );
};

export default CartItem;
