import React from "react";
import "../../styles/global.css";

export const Button = ({ children, asChild }) => (
  <button>
    {asChild ? children : <span>{children}</span>}
  </button>
);
