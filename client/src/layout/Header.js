import React from "react";

const Header = () => {
  return (
    <div
      className="w-full m-0 p-0 bg-cover bg-bottom"
      style={{
        backgroundImage: `url("https://www.tailwindtoolbox.com/templates/cover.jpg")`,
        height: "60vh",
        maxHeight: "460px",
      }}
    >
      
      <div className="container max-w-4xl mx-auto pt-16 md:pt-28 text-center break-normal">
        <p className="text-white font-extrabold text-3xl md:text-5xl">
          <span className="text-green-600 text-5xl">PLAY</span>STONE
        </p>
        <p className="text-xl md:text-2xl text-gray-100 mt-5">
          คำแรกติดใจคำต่อไปติดคอ
        </p>
      </div>
    </div>
  );
};

export default Header;
