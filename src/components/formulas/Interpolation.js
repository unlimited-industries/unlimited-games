import React from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";

const HermitInterpolation = () => {
  const formula = "H_n(x) = \\sum_{i=0}^{n} f(x_i) L_{2i}^{(n)}(x) + f'(x_i) L_{2i+1}^{(n)}(x)";

  return (
    <>
        <BlockMath>{formula}</BlockMath>
    </>
  );
};

export default HermitInterpolation;