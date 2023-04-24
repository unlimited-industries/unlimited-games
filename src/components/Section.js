function Section({ children, bgImage, activeSlide, onLeftClick, onRightClick, totalSlides }) {
    const style = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      height: '80vh'
    };
  
    return (
      <div className="w-full min-h-screen flex relative" style={style}>
        {activeSlide > 0 && <ArrowButton direction="left" onClick={onLeftClick} />}
        <div className="w-full flex" style={{ height: '100%' }}>
          {children}
        </div>
        {activeSlide < totalSlides - 1 && <ArrowButton direction="right" onClick={onRightClick} />}
      </div>
    );
  }
  
  function Slide({ children }) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        {children}
      </div>
    );
  }
  
  function LeftPane({ children }) {
    return (
      <div className="w-full p-20 flex items-center justify-center" style={{ height: '100%' }}>
        {children}
      </div>
    );
  }
  
  function RightPane({ children }) {
    return (
      <div className="w-full p-20 flex items-center justify-center" style={{ height: '100%' }}>
        {children}
      </div>
    );
  }
  
  function ArrowButton({ direction, onClick }) {
    const className = `absolute h-full w-16 opacity-60 hover:opacity-100 bg-black transition-opacity duration-300 ${
      direction === 'left' ? 'left-0' : 'right-0'
    }`;
  
    return (
      <button className={className} onClick={onClick}>
        <div className="h-full w-full flex items-center justify-center">
          {direction === 'left' ? (
            <i className="fas fa-chevron-left text-white"></i>
          ) : (
            <i className="fas fa-chevron-right text-white"></i>
          )}
        </div>
      </button>
    );
  }

export {Section, Slide, LeftPane, RightPane}
