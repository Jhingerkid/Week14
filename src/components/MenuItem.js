import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
const Title = styled.span``;
const CardBody = styled.div``;
const CardText = styled.span``;
const CardPrice = styled.span``;

const MenuItem = (props) => {
  console.log("Menu Item Props", props);
  return (
    <Card>
      <Title>{props.itemInfo.name}</Title>
      <CardBody>
        <CardText />
        <CardPrice>{props.itemInfo.price}</CardPrice>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
