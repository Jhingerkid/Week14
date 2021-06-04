import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
const Title = styled.span`
  color: ${(props) => props.tertiaryColor};
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardText = styled.span``;
const CardPrice = styled.span`
  color: ${(props) => props.primaryColor};
`;
const AddToCart = styled.button`
  width: 50%;
  cursor: pointer;
`;

function addCart(itemName, itemPrice, updateCartList, cartList) {
  let cartItem = {
    name: itemName,
    price: itemPrice.toFixed(2),
    quantity: 1,
  };
  let currentCart = [...cartList];
  currentCart.forEach((element) => {
    if (element.name.includes(cartItem.name)) {
      console.log(cartItem.name + " is already included");
    } else {
      console.log("lmao");
    }
  });

  currentCart.push(cartItem);
  updateCartList(currentCart);
}

const MenuItem = (props) => {
  return (
    <Card>
      <Title tertiaryColor={props.currentTheme.tertiaryColor}>
        {props.itemInfo.name}
      </Title>
      <CardBody>
        <CardText />
        <CardPrice primaryColor={props.currentTheme.primaryColor}>
          {props.itemInfo.price}
        </CardPrice>
        <AddToCart
          onClick={() => {
            addCart(
              props.itemInfo.name,
              props.itemInfo.price,
              props.updateCartList,
              props.cartList
            );
          }}
        >
          Add to Cart
        </AddToCart>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
