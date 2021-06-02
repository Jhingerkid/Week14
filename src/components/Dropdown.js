import React from "react";

const Dropdown = (props) => {
  console.log(props);
  function update(e) {
    let colorData = props.data[e.target.selectedIndex - 1];
    console.log(colorData);
    let colorTheme = {
      primaryColor: colorData.primaryColor,
      secondaryColor: colorData.secondaryColor,
      tertiaryColor: colorData.tertiaryColor,
    };
    props.updateRestaurant(e.target.value);
    props.updateTheme(colorTheme);
  }
  return (
    <div className="dropdown">
      <select onChange={(e) => update(e)}>
        <option disabled selected value>
          -- select an option --
        </option>
        {props.data.map((option) => {
          return (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
