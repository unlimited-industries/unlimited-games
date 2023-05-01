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
import { FourierTransform } from "./components/formulas/FourierTransform";
import { NavierStokes } from "./components/formulas/NavierStokes";
import { SecondSpecialLimit } from "./components/formulas/SecondSpecialLimit";

function App() {
  const [activeSlides, setActiveSlide] = useState([0, 0, 0, 0, 0]);

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
              The Fourier Transform makes it possible to achieve even more
              flexibility in customizing procedural generation to add individual
              structures and terrain patches.
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
            <img
              className="w-2/3 h-auto mb-4"
              src="fourier_transform(2).png"
              alt="Fourier Transform 2"
            ></img>
            <div className="bg-black bg-opacity-60 w-5/6 h-1/5 text-white text-opacity-80 py-3">
              <FourierTransform />
            </div>
          </div>
        ),
      },
    ],
    [
      {
        leftContent: (
          <div className="container mx-auto flex flex-col items-center">
            <img
              className="w-5/6 h-auto"
              src="procedural_animation.gif"
              alt="Procedural Animation"
            ></img>
          </div>
        ),
        rightContent: (
          <div className="backdrop-blur-sm pb-10">
            <h2 className="text-white font-bold">Animation</h2>
            <br />
            <p className="text-white">
              In addition to procedural generation, there is also procedural
              animation, when the animation is generated at runtime. This is
              often used to simulate physical phenomena. And to simulate the
              phenomenon of the real world, mathematical analysis is needed. For
              example, to simulate liquids, the Navier-Stokes equation is used -
              a system of differential equations in partial derivatives.
              <br />
              <br />
              <NavierStokes />
            </p>
          </div>
        ),
      },
      {
        leftContent: (
          <p className="text-white">
            As with procedural generation, mathematical analysis can be used to
            achieve greater fluency. Interpolation and Bezier curves may be
            applicable. With the help of mathematical analysis any desired level
            of smoothness of animations can be achieved, from Newton's laws and
            mechanics, ending with machine learning and neural networks, as in{" "}
            <a
              className="dark:text-blue-500"
              href="https://static-wordpress.akamaized.net/montreal.ubisoft.com/wp-content/uploads/2019/08/27140237/deep-cloth-paper.pdf"
            >
              this article
            </a>
            , where the physics of the real world is simulated using neural
            networks. Or like Rain World, which is a highly detailed ecosystem
            simulation using procedural animation and generation, as well as
            game AI.
          </p>
        ),
        rightContent: (
          <div className="container">
            <img src="rain_world.gif" alt="Rain World"></img>
            <p className="text-gray-500 text-sm m-5">
              Procedurally animated npc in Rain World
            </p>
          </div>
        ),
      },
    ],
    [
      {
        rightContent: (
          <p className="text-white">
            Mathematical analysis can be useful for creating game AI, especially
            in the strategy genre with complex economy. In such a game, there
            may be complex mechanisms of supply and demand nd emission, when it
            is more and more difficult to extract resources, so that there is no
            inflation of the in-game currency. Also, an investment system should
            be devised and related problems solved. For example, the second
            remarkable limit concerns just the same economic problem of
            reinvestment. <SecondSpecialLimit />
            <br />
            <br />
            The parameters can also depend on each other. For example, damage
            depends on attack speed, health depends on regeneration and defense
            speed. At the same time, the defense slows down the speed of
            movement. All these conditions can be reduced to an equation or
            system of equations that depends on key parameters such as money,
            time, population limit. For optimization, gradient descent can be
            used, which is based on the concept of partial derivative -
            derivative with respect to one variable, when all other variables
            are assumed to be constant. Integrals can also be useful to
            determine the amount of goods to be purchased, which will increase
            with each purchase.
          </p>
        ),
        leftContent: (
          <img src="gradient_descent.png" alt="Gradient Descent"></img>
        ),
      },
    ],
    [
      {
        leftContent: (
          <p className="text-white w-3/5 mr-44">
            {`
            Our team is currently developing a system to automatically balance
            our game. For this, a method from machine learning is used -
            Generative Adversarial Algorithm, AI finds the best strategy based
            on the data and tests all classes of units, and the system changes
            the mathematical model of the game in such a way as to create a
            balanced and fair game. For this, the Monte Carlo method and
            analysis of the obtained data using the methods of mathematical and
            statistical analysis are used.`}
          </p>
        ),
        rightContent: (
          <p className="text-white w-3/5 ml-44 text-sm">
            {`The difficulty arises in how to make
            feedback between the AI outputs and the original equations. First
            step - is to determine the requirements for the game to be balanced:
            1) The ability to play for any faction so that equal players get a
            draw regardless of the chosen strategy. 2) Maintaining balance
            throughout the entire gaming session. To be able to develop at the
            same speed. Our development and game design teams see two options:
            1) Using the error function and minimizing it 2) The use of
            differential equations, since it is necessary to take into account
            the speed of development of an individual hero, as well as the pace
            of development of the entire city - the main location of our
            strategy.`}
          </p>
        ),
      },
    ],
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
      <Section
        bgImage="pacman.png"
        activeSlide={activeSlides[2]}
        onLeftClick={prevSlide(2)}
        onRightClick={nextSlide(2)}
        totalSlides={slides[2].length}
      >
        <Slide>
          <LeftPane>{slides[2][activeSlides[2]].leftContent}</LeftPane>
          <RightPane>{slides[2][activeSlides[2]].rightContent}</RightPane>
        </Slide>
      </Section>
      <Section
        bgImage="gradient.jpeg"
        activeSlide={activeSlides[3]}
        onLeftClick={prevSlide(3)}
        onRightClick={nextSlide(3)}
        totalSlides={slides[3].length}
      >
        <Slide>
          <LeftPane>{slides[3][activeSlides[3]].leftContent}</LeftPane>
          <RightPane>{slides[3][activeSlides[3]].rightContent}</RightPane>
        </Slide>
      </Section>
      <Section
        bgImage="balance.png"
        activeSlide={activeSlides[4]}
        onLeftClick={prevSlide(4)}
        onRightClick={nextSlide(4)}
        totalSlides={slides[4].length}
      >
        <Slide>
          <LeftPane>{slides[4][activeSlides[4]].leftContent}</LeftPane>
          <RightPane>{slides[4][activeSlides[4]].rightContent}</RightPane>
        </Slide>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
