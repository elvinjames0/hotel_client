import React, { useState } from "react";
import Checkbox from "./checkbox";

const FilterRoom = () => {
  const room = {
    balcony: "false",
    fan: "false",
    chair: "false",
  };
  const [checkboxValues, setCheckboxValues] = useState({});
  const handleCheckboxChange = (event) => {
    let { name } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [name]: event.target.checked,
    }));
  };
  return (
    <div className=" grid grid-cols-7 gap-3">
      <Checkbox
        content="Balcony"
        focus="balcony"
        handleCheckboxChange={handleCheckboxChange}
      />
      <Checkbox
        content="Fan"
        focus="fan"
        handleCheckboxChange={handleCheckboxChange}
      />
      <Checkbox
        content="Chair"
        focus="chair"
        handleCheckboxChange={handleCheckboxChange}
      />
      <Checkbox
        content="Empty"
        focus="empty"
        handleCheckboxChange={handleCheckboxChange}
      />
      <Checkbox
        content="Using"
        focus="using"
        handleCheckboxChange={handleCheckboxChange}
      />
      <Checkbox
        content="Cleaning"
        focus="cleaning"
        handleCheckboxChange={handleCheckboxChange}
      />
      <Checkbox
        content="Not Use"
        focus="notuse"
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default FilterRoom;
