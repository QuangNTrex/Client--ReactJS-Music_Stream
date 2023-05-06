import React, { useEffect, useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import "./AudioPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import { PlayerControllerActions } from "../../store/player-controller";

const AudioPlayer = ({ url }) => {
  const listChannel = useSelector((state) => state.channel.listChannel);
  const { videoDetail, channelTitle, channelId, indexOfVideo } = useSelector(
    (state) => state.playerController
  );
  const currentChannel = listChannel.filter(
    (channel) => channel.channelId === channelId
  )[0];
  const videoId = videoDetail.videoId;

  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const nextHandler = () => {
    if (indexOfVideo === currentChannel.videoDetails.length - 1) return;
    dispatch(
      PlayerControllerActions.addPlay({
        videoDetail: currentChannel.videoDetails[indexOfVideo + 1],
        channelTitle,
        channelId,
        indexOfVideo: indexOfVideo + 1,
      })
    );
    setTimeout(() => {
      audioRef.current.play();
    }, 500);
  };
  const prevHandler = () => {
    if (indexOfVideo === 0) return;
    dispatch(
      PlayerControllerActions.addPlay({
        videoDetail: currentChannel.videoDetails[indexOfVideo - 1],
        channelTitle,
        channelId,
        indexOfVideo: indexOfVideo - 1,
      })
    );
    setTimeout(() => {
      audioRef.current.play();
    }, 500);
  };
  const handleTimeSliderChange = ({ x }) => {
    setCurrentTime(x);
    audioRef.current.currentTime = x;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 300);
  }, [audioRef, videoId]);

  return (
    <div className="audio-player">
      <div className="level-item">
        <div onClick={prevHandler}>
          <i className="fas fa-step-backward"></i>
        </div>
        {isPlaying ? (
          <div onClick={handlePause}>
            <i className="fas fa-pause"></i>
          </div>
        ) : (
          <div onClick={handlePlay}>
            <i className="fas fa-play"></i>
          </div>
        )}
        <div onClick={nextHandler}>
          <i className="fas fa-step-forward"></i>
        </div>
      </div>
      <div className="level-item-bottom">
        <p>{`${~~(currentTime / 60)}:${
          ~~(currentTime % 60) < 10 ? "0" : ""
        }${~~(currentTime % 60)}`}</p>
        <TimeSlider
          axis="x"
          xmax={videoDetail.lengthSeconds}
          onChange={handleTimeSliderChange}
          x={currentTime}
          styles={{
            track: {
              backgroundColor: "#e3e3e3",
              height: "2px",
            },
            active: {
              backgroundColor: "#333",
              height: "2px",
            },
            thumb: {
              marginTop: "-3px",
              width: "8px",
              height: "8px",
              backgroundColor: "#333",
              borderRadius: 0,
            },
          }}
        />
        <p>{`${~~(videoDetail.lengthSeconds / 60)}:${
          ~~(videoDetail.lengthSeconds % 60) < 10 ? "0" : ""
        }${~~(videoDetail.lengthSeconds % 60)}`}</p>
      </div>

      <audio
        ref={audioRef}
        src={url}
        onEnded={() => {
          handlePlay();
        }}
        onTimeUpdate={(state) => setCurrentTime(audioRef.current.currentTime)}
      />
    </div>
  );
};

export default AudioPlayer;
