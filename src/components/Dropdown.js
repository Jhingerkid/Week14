import React from "react";

const Dropdown = (props) => {
  console.log(props.data);
  return (
    <div className="dropdown">
      <select>
        {props.data.map((option) => {
          return <option key={option.id}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
