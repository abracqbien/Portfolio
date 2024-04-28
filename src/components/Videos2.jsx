import React from "react"
import ReactPlayer from "react-player"

import Video1 from "Videos/Homer_walk_cycle_closingeyes.mp4"
import Video2 from "Videos/horse_run_cycle.mp4"
import Video3 from "Videos/Panther_Cycle_Run.mp4"

export default function Videos2() {
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
      <ReactPlayer url={Video2} {...playerProps} />
      <ReactPlayer url={Video3} {...playerProps} />
    </div>
  )
}
