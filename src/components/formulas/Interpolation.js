import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

const HermitInterpolation = () => {
  const formula =
    "H_n(x) = \\sum_{i=0}^{n} f(x_i) L_{2i}^{(n)}(x) + f'(x_i) L_{2i+1}^{(n)}(x)";

  return (
    <>
      <InlineMath>{formula}</InlineMath>
    </>
  );
};

const CosineInterpolation = () => {
  const formula = "y(t) = (1 - cos(\\pi t)) \\frac{y_1 - y_0}{2} + y_0";

  return (
    <>
      <InlineMath>{formula}</InlineMath>
    </>
  );
};

const CubicInterpolation = () => {
  const formula =
    "S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3";
  const coefficients = `
    \\begin{cases}
          a_i = f(x_i);\\\\
          d_i = \\frac{c_i - c_{i-1}}{3 \\cdot h_i}; \\\\
          b_i = \\frac{a_i - a_{i - 1}}{h_i} + \\frac{2 \\cdot c_i + c_{i-1}}{3} \\cdot h_i; \\\\
    \\end{cases}
  `;

  return (
    <>
      <InlineMath>{formula}</InlineMath>
      <br />
      <br />
      <InlineMath>{coefficients}</InlineMath>
    </>
  );
};

const SplineInterpolation = () => {
  const formula =
    "q_x = (1 - t(x))y_1 + t(x)y_2 + t(x)(1 - t(x))((1-t(x))a + t(x)b)";
  const coefficients = `
    \\begin{cases}
        t(x) = \\frac{x - x_1}{x_2 - x_1}; \\\\
        a = k_1(x_2  - x_1) - (y_2 - y_1); \\\\
        b = -k_2(x_2 - x_1) + (y_2 - y_1); \\\\
        q' = \\frac{dq}{dx} = \\frac{dq}{dt}\\frac{dt}{dx} = \\frac{dq}{dt}\\frac{1}{x_2 - x_1}; \\\\
        q'' = 2\\frac{b - 2a + (a-b)3t}{(x_2 - x_1)^2}
    \\end{cases}
  `;

  return (
    <>
      <InlineMath>{formula}</InlineMath>
      <br/>
      <br/>
      <InlineMath>{coefficients}</InlineMath>
    </>
  );
};

export { HermitInterpolation, CosineInterpolation, CubicInterpolation, SplineInterpolation };
