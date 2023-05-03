import React, { useState } from "react";
import "katex/dist/katex.min.css";
import "./Interpolation.css";
import { InlineMath } from "react-katex";

const InterpolationFormulas = () => {
  const [isSpareImageVisible, setIsSpareImageVisible] = useState(false);

  const handleClick = () => {
    console.log("alsdkjf");
    setIsSpareImageVisible(!isSpareImageVisible);
  };

  return (
    <div className="relative bg-black bg-opacity-60 w-5/6 h-full text-white text-opacity-80">
      <button
        onClick={handleClick}
        className="absolute bottom-0 right-0 bg-gray-400 bg-opacity-10 text-xl p-1 hover:bg-opacity-100 transition-opacity"
      >
        🔧
      </button>
      {!isSpareImageVisible ? (
        <div className="py-16 pl-6">
          <div className="formula">
            <InlineMath>{"1)"}</InlineMath>
            <HermitInterpolation />
          </div>
          <br />
          <div className="formula">
            <InlineMath>{"2)"}</InlineMath>
            <CosineInterpolation />
          </div>
          <br />
          <div className="formula">
            <InlineMath>{"3)"}</InlineMath>
            <CubicInterpolation />
          </div>
          <br />
          <div className="spline-formula">
            <InlineMath>{"4)"}</InlineMath>
            <SplineInterpolation />
          </div>
        </div>
      ) : (
        <div className="pt-6 py-1">
          <img src="formulas_alternative.png" alt="Formulas Alternative"></img>
        </div>
      )}
    </div>
  );
};

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
      <br />
      <br />
      <InlineMath>{coefficients}</InlineMath>
    </>
  );
};

export {
  HermitInterpolation,
  CosineInterpolation,
  CubicInterpolation,
  SplineInterpolation,
  InterpolationFormulas,
};
