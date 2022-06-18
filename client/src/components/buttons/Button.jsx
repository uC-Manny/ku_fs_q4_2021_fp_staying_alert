import React from "react";
import "./Button.css";

const styles = [
   "btn-primary",
   "btn-secondary",
   "btn-warning",
   "btn-danger",
   "btn-success",
   "btn-info",
];

const sizes = ["btn-sm", "btn-md", "btn-lg"];

export default function Button({
   children,
   onClick,
   buttonStyle,
   buttonSize,
   type,
}) {
   const checkButtonStyle = styles.includes(buttonStyle)
      ? buttonStyle
      : styles[0];
   const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
   const checkType = type ? type : "button";

   return (
      <button
         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
         onClick={onClick}
         type={checkType}
      >
         {children}
      </button>
   );
}
