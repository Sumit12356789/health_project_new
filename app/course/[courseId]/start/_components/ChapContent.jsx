import React from "react";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

function ChapContent({ chapter, content }) {
  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.Name}</h2>
      <p className="text-gray-500">{chapter?.About}</p>

      {/* Video */}
      <div className="flex justify-center my-6">
        <YouTube videoId={content?.videoId} opts={opts} />
      </div>
      

      {/* Content */}
    </div>
  );
}

export default ChapContent;
