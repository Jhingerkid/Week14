import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-bottom: 2%;
  font-size: 25px;
  cursor: pointer;
`;

const CartButton = (props) => {
  return (
    <StyledButton
      onClick={() => {
        props.updateShowCart(true);
      }}
    >
      View Cart
    </StyledButton>
  );
};

export default CartButton;
