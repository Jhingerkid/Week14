import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 70%;
  border: 1px solid black;
`;
const Title = styled.span`
  color: ${(props) => props.tertiaryColor};
  font-size: 200%;
  width: 100%;
  text-align: center;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 95%;
`;
const CardText = styled.span`
  color: ${(props) => props.tertiaryColor};
  font-size: 200%;
  text-align: center;
`;
const CardPrice = styled.span`
  color: ${(props) => props.primaryColor};
  font-size: 200%;
  text-align: center;
`;
const AddToCart = styled.button`
  width: 80%;
  cursor: pointer;
`;

function addCart(itemName, itemPrice, updateCartList, cartList, itemId) {
  var dupe = false;
  let cartItem = {
    name: itemName,
    price: itemPrice.toFixed(2),
    quantity: 1,
    id: itemId,
  };
  let currentCart = [...cartList];
  const finalCart = currentCart.filter((item) => {
    if (item.id === cartItem.id) {
      item.quantity = item.quantity + 1;
      dupe = true;
      return item;
    } else {
      return item;
    }
  });
  if (dupe) {
    updateCartList(finalCart);
  } else {
    currentCart.push(cartItem);
    updateCartList(currentCart);
  }
}

const MenuItem = (props) => {
  return (
    <Card>
      <CardBody>
        <Title tertiaryColor={props.currentTheme.tertiaryColor}>
          {props.itemInfo.name}
        </Title>
        <CardText tertiaryColor={props.currentTheme.tertiaryColor}>
          {props.itemInfo.description}
        </CardText>
        <CardPrice primaryColor={props.currentTheme.primaryColor}>
          ${props.itemInfo.price.toFixed(2)}
        </CardPrice>
        <AddToCart
          onClick={() => {
            addCart(
              props.itemInfo.name,
              props.itemInfo.price,
              props.updateCartList,
              props.cartList,
              props.itemInfo.id
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
