import React from "react"
import ReactPlayer from "react-player"

import Video1 from "Videos/Jinx_rendu_provisoire0001-0100.mp4"
import Video2 from "Videos/FinaleBakir.mp4"

export default function Videos3() {
  const playerProps = {
    controls: true,
    muted: true,
    loop: true,
    height: "100%",
    width: "100%",
  }

  return (
    <div className="player-wrapper">
      <ReactPlayer url={Video1} {...playerProps} />
      <ReactPlayer url={"https://youtu.be/h5KI42Wg6y8"} {...playerProps} />
      <ReactPlayer url={"https://www.youtube.com/watch?v=2zWbYa1oOQc"} {...playerProps} />
    </div>
  )
}
