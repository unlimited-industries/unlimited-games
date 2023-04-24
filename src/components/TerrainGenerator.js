import React, { useRef, useEffect, useState, useCallback } from "react";
import { createNoise2D } from "simplex-noise";

const BiomeColors = {
  OCEAN: "rgba(0, 0, 255, 1)",
  DESERT: "rgba(255, 255, 102, 1)",
  FOREST: "rgba(0, 255, 0, 1)",
  MOUNTAIN: "rgba(128, 128, 128, 1)",
};

const getBiomeColor = (noiseValue, waterLevel) => {
  if (noiseValue < waterLevel) {
    return BiomeColors.OCEAN;
  } else if (noiseValue >= waterLevel && noiseValue < 0.5) {
    return BiomeColors.DESERT;
  } else if (noiseValue >= 0.5 && noiseValue < 0.7) {
    return BiomeColors.FOREST;
  } else {
    return BiomeColors.MOUNTAIN;
  }
};

const TerrainGenerator = ({ width = 500, height = 500, scale = 50 }) => {
  const canvasRef = useRef(null);
  const [waterLevel, setWaterLevel] = useState(0.3);

  const drawTerrain = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const simplex = createNoise2D(Math.random);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const noiseValue = (simplex(x / scale, y / scale) + 1) / 2;
        const biomeColor = getBiomeColor(noiseValue, waterLevel);
        ctx.fillStyle = biomeColor;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, [width, height, scale, waterLevel]);

  useEffect(() => {
    drawTerrain();
  }, [drawTerrain]);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={waterLevel}
        onChange={(e) => setWaterLevel(parseFloat(e.target.value))}
        style={{
          width: "100%",
          height: "25px",
          background: "linear-gradient(to right, #0000ff, #ffff66, #00ff00, #808080)",
          outline: "none",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default TerrainGenerator;