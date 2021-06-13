import React, { useRef } from "react";
import "./Switch.css";

const Switch = ({ setDarkMode, checked, setChecked }) => {
  const ref = useRef(null);

  // functions to manage the state of the checkbox input in order to toggle themes

  const handleChange = () => {
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  };

  return (
    <div className="darkMode">
      <p className="darkMode__title">
        {checked ? "Dark " : "Light "}
        Mode
      </p>
      <input
        ref={ref}
        onChange={handleChange}
        checked={checked}
        type="checkbox"
        className="darkMode__checkbox"
        id="checkbox"
      />
      <label className="darkMode__switch" htmlFor="checkbox"></label>
    </div>
  );
};

export default Switch;
