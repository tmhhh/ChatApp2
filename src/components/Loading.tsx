import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Loading() {
  return (
    <Player
      autoplay
      loop
      src={`https://assets3.lottiefiles.com/packages/lf20_3PNLts.json`}
      //   className="loading-animation"
      className=" w-[400px] h-[400px] absolute right-2/4 bottom-2/4 translate-x-1/2 translate-y-1/2"
    >
      {/* <Controls
            visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          /> */}
    </Player>
  );
}

export default Loading;
