import React from 'react';

const Footer = () => {
  return (
    <footer
      className="w-full py-12 relative"
      style={{
        background: 'linear-gradient(90deg, #2c2c2c 0%, #4a4a4a 100%)',
      }}
    >
      <div className="container mx-auto flex items-center justify-center">
        <a
          href="https://t.me/altcoding"
          target="_blank"
          rel="noreferrer"
          className="mx-8 transform hover:scale-105 transition-transform duration-200"
        >
          <img
            src="telegram.svg"
            alt="Telegram"
            className="w-40 h-40 rounded-full hover:bg-blue-500 p-2"
            style={{ filter: 'brightness(1)' }}
          />
        </a>
        <a
          href="https://github.com/saralinov-r-auca-2022"
          target="_blank"
          rel="noreferrer"
          className="mx-8 transform hover:scale-105 transition-transform duration-200"
        >
          <img
            src="github.svg"
            alt="Github"
            className="w-40 h-40 rounded-full hover:bg-blue-500 p-2"
            style={{ filter: 'brightness(1)' }}
          />
        </a>
      </div>
      <img
        src="unlimited.png"
        alt="Unlimited"
        className="absolute left-0 bottom-0 w-40 h-auto"
      />
    </footer>
  );
};

export default Footer;