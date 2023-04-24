import React, { useRef, useEffect } from "react";

const Header = ({ backgroundImage }) => {
  const headerRef = useRef(null);
  const textRef = useRef(null);

  const lerp = (start, end, factor) => {
    return (1 - factor) * start + factor * end;
  };

  useEffect(() => {
    textRef.current.style.transform = "translate(0px, 0px)";
    headerRef.current.style.transform = "scale(1.2) translate(0px, 0px)";

    let animationFrameId;

    const animate = () => {
      const currentTransformText = textRef.current.style.transform.match(
        /translate\(([-0-9.]+)px, ([-0-9.]+)px\)/
      );
      if (!currentTransformText) return;

      const currentXText = parseFloat(currentTransformText[1]);
      const currentYText = parseFloat(currentTransformText[2]);
      const newXText = lerp(currentXText, textRef.current.targetX, 0.1);
      const newYText = lerp(currentYText, textRef.current.targetY, 0.1);
      textRef.current.style.transform = `translate(${newXText}px, ${newYText}px)`;

      const currentTransformBackground =
        headerRef.current.style.transform.match(
          /scale\(1.2\) translate\(([-0-9.]+)px, ([-0-9.]+)px\)/
        );
      if (!currentTransformBackground) return;

      const currentXBackground = parseFloat(currentTransformBackground[1]);
      const currentYBackground = parseFloat(currentTransformBackground[2]);
      const newXBackground = lerp(
        currentXBackground,
        -textRef.current.targetX / 4,
        0.1
      );
      const newYBackground = lerp(
        currentYBackground,
        -textRef.current.targetY / 4,
        0.1
      );
      headerRef.current.style.transform = `scale(1.2) translate(${newXBackground}px, ${newYBackground}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const headerRect = headerRef.current.parentElement.getBoundingClientRect();
    const centerX = headerRect.left + headerRect.width / 2;
    const centerY = headerRect.top + headerRect.height / 2;
    const angle =
      Math.atan2(e.clientY - centerY, e.clientX - centerX) + Math.PI;
    const distance = 20;
    textRef.current.targetX = distance * Math.cos(angle);
    textRef.current.targetY = distance * Math.sin(angle);
  };

  const handleMouseLeave = () => {
    textRef.current.targetX = 0;
    textRef.current.targetY = 0;
  };

  return (
    <div
      className="relative bg-contain bg-center bg-no-repeat h-96 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={headerRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: "scale(1.2) translate(0, 0)",
        }}
      ></div>
      <h1
        ref={textRef}
        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold"
        style={{ transform: "translate(0, 0)" }}
      >
        Unlimited
      </h1>
    </div>
  );
};

export default Header;
