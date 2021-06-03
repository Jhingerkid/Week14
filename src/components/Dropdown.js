import React from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  padding: 2% 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  background-color: ${(props) => props.tertiaryColor};
`;

const OptionText = styled.option`
  background-color: ${(props) => props.secondaryColor};
  color: ${(props) => props.primaryColor};
`;

const SelectText = styled.select`
  border: none;
  font-size: 35px;
  width: 100%;
  background-color: ${(props) => props.currentTheme.secondaryColor};
  color: ${(props) => props.currentTheme.primaryColor};
`;

const Dropdown = (props) => {
  function update(e) {
    let colorData = props.data[e.target.selectedIndex];
    let colorTheme = {
      primaryColor: colorData.primaryColor,
      secondaryColor: colorData.secondaryColor,
      tertiaryColor: colorData.tertiaryColor,
    };
    props.updateRestaurant(e.target.value);
    props.updateTheme(colorTheme);
  }
  return (
    <DropdownContainer>
      <SelectText currentTheme={props.currentTheme} onChange={(e) => update(e)}>
        {props.data.map((option) => {
          return (
            <OptionText
              primaryColor={option.primaryColor}
              secondaryColor={option.secondaryColor}
              key={option.id}
              value={option.name}
            >
              {option.name}
            </OptionText>
          );
        })}
      </SelectText>
    </DropdownContainer>
  );
};

export default Dropdown;
