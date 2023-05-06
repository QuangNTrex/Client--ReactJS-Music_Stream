import { useSelector } from "react-redux";
import "./ChannelList.css";
import { useNavigate } from "react-router-dom";

const ChannelList = () => {
  const listChannel = useSelector((state) => state.channel.listChannel) || [];

  const navigate = useNavigate();
  return (
    <div className="channel-list">
      {listChannel.map((channel) => (
        <div
          className="channel-list_item"
          key={channel.channelId}
          onClick={() => {
            navigate(`/channel/${channel.channelId}`);
          }}
        >
          <div className="thumbnail">
            <img
              src={channel.thumbnail}
              alt="no"
              className="thumbnail-img noselect"
            />
          </div>
          <div className="info noselect">
            <h3 className="title">{channel.channelTitle}</h3>
            <p className="desc">{channel.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChannelList;
