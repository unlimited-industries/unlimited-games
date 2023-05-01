import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const SecondSpecialLimit = () => {
  const formula = "\\lim\\limits_{n \\to  \\infty} (1 + \\frac{1}{x})^x = e";

  return (
    <>
      <InlineMath>{formula}</InlineMath>
    </>
  );
};

export { SecondSpecialLimit };
