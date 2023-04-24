import React, { useState } from 'react';
import './index.css';
import TerrainGenerator from './components/TerrainGenerator';
import {Section, Slide, LeftPane, RightPane} from './components/Section'

function App() {
  const [activeSlides, setActiveSlide] = useState([0, 0]);

  const slides = [[
    {
      leftContent: (
        <>
          <p className="text-white"><b>Procedural generation</b> - is a way to automatically 
          generate game content such as terrain. Perlin noise is used to generate the terrain. 
           <br/><br/><b>Perlin noise</b> -  is gradient noise consisting of a set of
           pseudo-random unit vectors (gradient directions) located at specific points in space and interpolated by a smoothing function between those points.
            To generate Perlin noise in one-dimensional space, it is necessary to calculate the value of the noise function for each point in this space, using 
            the direction of the gradient (or slope) at the specified point.</p>
        </>
      ),
      rightContent: <TerrainGenerator/>,
    },
    {
      leftContent: (
        <>
          <p className="text-white">Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum.</p>
        </>
      ),
      rightContent: (
      <>
      <p className="text-white">Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum.</p>
    </>)
    }
  ], 
  [
    {
      leftContent: (
        <img src='fourier_transform.gif' alt=''></img>
      ),
      rightContent: (       
      <>
      <p className="text-white">Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum.</p>
    </>)
    }
  ]];

  const prevSlide = (section) => {
    return () => {
      setActiveSlide((prev) => {
        const prevIndex = (prev[0] - 1 + slides[section].length) % slides[section].length;
        const newSlides = prev.slice();
        newSlides[section] = prevIndex;
        return newSlides;
      });
    }
  };

  const nextSlide = (section) => {
    return () => {
      setActiveSlide((prev) => {
        const nextIndex = (prev[section] + 1) % slides[section].length;
        const newSlides = prev.slice();
        newSlides[section] = nextIndex;
        return newSlides;
      });
    }
  };

  return (
    <div className="App">
      <div className="h-[80vh] flex justify-center items-center" style={{backgroundImage: `url(header.jpeg)`}}>
        <h1 className="text-white text-9xl">Unlimited</h1>
        </div>
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
        bgImage="math.jpeg"
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
    </div>
  );
}

export default App;