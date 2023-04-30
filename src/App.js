import React, { useState } from "react";
import "./index.css";
import TerrainGenerator from "./components/TerrainGenerator";
import { Section, Slide, LeftPane, RightPane } from "./components/Section";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  HermitInterpolation,
  CosineInterpolation,
  CubicInterpolation,
  SplineInterpolation,
} from "./components/formulas/Interpolation";
import { InlineMath } from "react-katex";
import { FourierTransform } from "./components/formulas/fourier_transform";

function App() {
  const [activeSlides, setActiveSlide] = useState([0, 0]);

  const slides = [
    [
      {
        leftContent: (
          <>
            <p className="text-white">
              <b>Procedural generation</b> - is a way to automatically generate
              game content such as terrain. Perlin noise is used to generate the
              terrain.
              <br />
              <br />
              <b>Perlin noise</b> - is gradient noise consisting of a set of
              pseudo-random unit vectors (gradient directions) located at
              specific points in space and interpolated by a smoothing function
              between those points. To generate Perlin noise in one-dimensional
              space, it is necessary to calculate the value of the noise
              function for each point in this space, using the direction of the
              gradient (or slope) at the specified point.
            </p>
          </>
        ),
        rightContent: <TerrainGenerator />,
      },
      {
        leftContent: (
          <>
            <p className="text-white text-base">
              For more flexible customization of procedural generation,
              interpolations can be used. In the mathematical field of numerical
              analysis, interpolation is a type of estimation, a method of
              constructing (finding) new data points based on the range of a
              discrete set of known data points. This is used to smooth Perlin
              noise values.
              <br />
              <br />
              <p className="text-xl">
                Interpolation types:
                <br />
                <ol className="list-decimal ml-6 mt-2">
                  <li>Hermit Interpolation</li>
                  <li>Cosine interpolation</li>
                  <li>Cubic interpolation</li>
                  <li>Spline interpolation</li>
                  <li>RBF interpolation</li>
                </ol>
              </p>
            </p>
          </>
        ),
        rightContent: (
          <div className="bg-black bg-opacity-60 w-5/6 h-full text-white text-opacity-80 py-16 pl-6">
            <InlineMath>{"1)"}</InlineMath>
            <HermitInterpolation />
            <br />
            <br />
            <InlineMath>{"2)"}</InlineMath>
            <CosineInterpolation />
            <br />
            <br />
            <InlineMath>{"3)"}</InlineMath>
            <CubicInterpolation />
            <br />
            <br />
            <div className="text-xs">
              <InlineMath>{"4)"}</InlineMath>
              <SplineInterpolation></SplineInterpolation>
            </div>
          </div>
        ),
      },
    ],
    [
      {
        leftContent: <img src="fourier_transform.gif" alt=""></img>,
        rightContent: (
          <div className="backdrop-blur-sm rounded-3xl p-3">
            <p className="text-white text-2xl ">
              The Fourier Transform gives you even more flexibility in
              customizing procedural generation to add individual structures and
              terrain patches.
              <br />
              <br />
              <h2>Algorithm:</h2>
              <ul className="list-decimal text-base pl-2 pt-2">
                <li>
                  Creating random noise: First, an image with random noise is
                  created.
                </li>
                <li>
                  Applying the Fourier transform: This results in a set of
                  complex numbers representing the amplitudes and phases of
                  various frequency components.
                </li>
                <li>
                  Modifying the spectrum: This allows for the creation of
                  textures with specific structures or patterns.
                </li>
                <li>
                  Inverse Fourier transform: After modifying the spectrum, the
                  inverse Fourier transform is applied to return to the image in
                  the spatial domain.
                </li>
              </ul>
            </p>
          </div>
        ),
      },
      {
        leftContent: (
          <div className="backdrop-blur-sm rounded-3xl">
            <p className="text-white text-xl">
              Fourier Transform is a mathematical model which helps to transform
              the signals between two different domains, such as transforming
              signal from frequency domain to time domain or vice versa.
            </p>
          </div>
        ),
        rightContent: (
          <div className="container mx-auto flex flex-col items-center">
            <img className="w-2/3 h-auto mb-4" src="fourier_transform(2).png" alt="Fourier Transform 2"></img>
            <div className="bg-black bg-opacity-60 w-5/6 h-1/5 text-white text-opacity-80 py-3">
              <FourierTransform />
            </div>
          </div>
        )
      }
    ]
  ];

  const prevSlide = (section) => {
    return () => {
      setActiveSlide((prev) => {
        const prevIndex =
          (prev[section] - 1 + slides[section].length) % slides[section].length;
        const newSlides = prev.slice();
        newSlides[section] = prevIndex;
        return newSlides;
      });
    };
  };

  const nextSlide = (section) => {
    return () => {
      setActiveSlide((prev) => {
        const nextIndex = (prev[section] + 1) % slides[section].length;
        const newSlides = prev.slice();
        newSlides[section] = nextIndex;
        return newSlides;
      });
    };
  };

  return (
    <div className="App overflow-x-hidden">
      <Header backgroundImage="header.jpeg" />
      <Section
        bgImage="procedural_generation.jpg"
        activeSlide={activeSlides[0]}
        onLeftClick={prevSlide(0)}
        onRightClick={nextSlide(0)}
        totalSlides={slides[0].length}
      >
        <Slide>
          <LeftPane>{slides[0][activeSlides[0]].leftContent}</LeftPane>
          <RightPane>{slides[0][activeSlides[0]].rightContent}</RightPane>
        </Slide>
      </Section>
      <Section
        bgImage="formulas.png"
        activeSlide={activeSlides[1]}
        onLeftClick={prevSlide(1)}
        onRightClick={nextSlide(1)}
        totalSlides={slides[1].length}
      >
        <Slide>
          <LeftPane>{slides[1][activeSlides[1]].leftContent}</LeftPane>
          <RightPane>{slides[1][activeSlides[1]].rightContent}</RightPane>
        </Slide>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
