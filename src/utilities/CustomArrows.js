import React from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

export const CustomPrevArrow = ({ className, style, onClick }) => (
  <button
    className={`text-2xl bg-secondary p-2 rounded-3xl ${className}`}
    //style={{ ...style }} // Ensure default styles are preserved
    onClick={onClick}
  >
    <GrFormPreviousLink />
  </button>
);

export const CustomNextArrow = ({ className, style, onClick }) => (
  <button
    className={`text-2xl bg-secondary p-2 rounded-3xl ${className}`}
   // style={{ ...style}} // Ensure default styles are preserved
    onClick={onClick}
  >
    <GrFormNextLink />
  </button>
);
