import { useSelector } from "react-redux";
import "./PlayerController.css";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { memo } from "react";

const PlayerController = () => {
  const { videoDetail, playing, channelTitle } = useSelector(
    (state) => state.playerController
  );

  if (!playing) return <div />;
  return (
    <div className="player-controller">
      <div className="player-controller__left player-info">
        <div className="thumbnail">
          <img
            src={videoDetail.thumbnailUrl}
            alt=""
            className="thumbnail-img"
          />
        </div>
        <div className="info">
          <h4 className="title">{`${videoDetail.title.slice(0, 20)} ${
            videoDetail.title.length > 20 && "..."
          }`}</h4>
          <p className="channel-name">{channelTitle}</p>
        </div>
      </div>
      <div className="player-controller__center music-control">
        <AudioPlayer
          url={`https://music-stream.onrender.com/stream/music/${videoDetail.videoId}`}
        />
      </div>
      <div className="player-controller__right music-setting"></div>
    </div>
  );
};
export default memo(PlayerController);
