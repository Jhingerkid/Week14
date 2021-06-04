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

function addCart(itemName, itemPrice, updateCartList, cartList, itemId) {
  var dupe = false;
  let cartItem = {
    name: itemName,
    price: itemPrice.toFixed(2),
    quantity: 1,
    id: itemId,
  };
  console.log("item", cartItem);
  let currentCart = [...cartList];
  console.log("known cart", currentCart);
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

// console.log("item", cartItem);
// let currentCart = [...cartList];
// console.log("known cart", currentCart);
// const finalCart = currentCart.filter((item) => {
//   if (item.id === cartItem.id) {
//     item.quantity = item.quantity + 1;
//     return item;
//   } else {
//     return item;
//   }
// });
// console.log("created final", finalCart);
// currentCart.push(cartItem);
