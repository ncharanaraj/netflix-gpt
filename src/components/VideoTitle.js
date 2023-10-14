import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold mb-6 md:text-6xl md:mb-0 ">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" bg-white text-black py-1 md:py-4 px-6 text-xl rounded-md mr-2 hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-md">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
