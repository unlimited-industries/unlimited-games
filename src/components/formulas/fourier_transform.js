import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const FourierTransform = () => {
  const formula =
    "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-i2\\pi\\xi{x}} dx";

  return (
    <>
      <BlockMath>{formula}</BlockMath>
    </>
  );
};

export {FourierTransform};
