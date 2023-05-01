import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const NavierStokes = () => {
  const formula = `\\frac{\\partial \\vec{v}}{\\partial t} =
   -(\\vec{v} \\cdot \\nabla)\\vec{v} + \\nu\\Delta\\vec{v} - \\frac{1}{\\rho}\\nabla{p}+\\vec{f}`;

  return (
    <>
      <InlineMath>{formula}</InlineMath>
    </>
  );
};

export { NavierStokes };
