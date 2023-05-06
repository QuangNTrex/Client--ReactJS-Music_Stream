import { useParams } from "react-router-dom";
import "./ChannelDetail.css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../util/Loading";
import { PlayerControllerActions } from "../../store/player-controller";

const ChannelDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const listChannel = useSelector((state) => state.channel.listChannel);
  const currentChannel = listChannel.filter(
    (channel) => channel.channelId === params.channelId
  )[0];
  if (!currentChannel) return <Loading />;

  const playingHandler = (videoDetail, indexOfVideo) => {
    dispatch(
      PlayerControllerActions.addPlay({
        videoDetail,
        indexOfVideo,
        channelTitle: currentChannel.channelTitle,
        channelId: currentChannel.channelId,
      })
    );
  };
  return (
    <div className="channel-detail">
      <div className="channel--top">
        <div className="channel--top-left">
          <div className="channel__heading">
            <h2 className="channel__heading_header noselect">{`Channel  >  ${currentChannel.channelTitle}`}</h2>
          </div>
        </div>
      </div>
      <div className="channel-detail__list">
        {currentChannel.videoDetails.map((videoDetail, i) => (
          <div
            className="channel-detail__list-item"
            key={videoDetail.videoId}
            onClick={playingHandler.bind(null, videoDetail, i)}
          >
            <div className="thumbnail">
              <img
                src={videoDetail.thumbnailUrl}
                alt=""
                className="thumbnail-img noselect"
              />
            </div>
            <div className="info noselect">
              <h3 className="title">{videoDetail.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelDetail;
