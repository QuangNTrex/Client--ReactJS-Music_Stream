import Popup from "reactjs-popup";
import "./Channel.css";
import { useState } from "react";
import { httpPost } from "../../libs/http";
import ChannelList from "./ChannelList";

const Channel = () => {
  const [listAnswerChannel, setListAnswerChannel] = useState([]);
  const [searchText, setSearchText] = useState("");
  const searchChannelHandler = () => {
    httpPost("/channel/search-list-channel", { q: searchText })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result.lists[0]);
        if (data.result) setListAnswerChannel(data.result.lists);
      });
  };
  const addChannelHandler = (channel) => {
    console.log(channel);
    httpPost("/channel/add-channel", { channel })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="channel">
      <div className="channel--top">
        <div className="channel--top-left">
          <div className="channel__heading">
            <h2 className="channel__heading_header noselect">Channel</h2>
          </div>
        </div>
        <div className="channel--top-right">
          <Popup
            trigger={
              <div className="channel__add-channel noselect">
                <i className="bi bi-plus-lg"></i>
                <p className="title">Add Channel</p>
              </div>
            }
            modal
          >
            {(close) => (
              <div className="channel__popup_add-channel">
                <div className="channel__popup_add-channel_container">
                  <div className="search-form">
                    <input
                      type="text"
                      className="search"
                      placeholder="Search Channel"
                      onChange={(e) => setSearchText(e.target.value)}
                      value={searchText}
                      onKeyDown={(e) => {
                        if (e.keyCode === 13) searchChannelHandler();
                      }}
                    />
                    <i
                      className="bi bi-search-heart"
                      onClick={searchChannelHandler}
                    ></i>
                  </div>
                  <div className="channel__popup_list_channel_result">
                    {listAnswerChannel.map((channel) => {
                      return (
                        <div className="channel__popup_list_channel_item">
                          <div className="item-left">
                            <div className="thumbnail">
                              <img
                                src={channel.snippet.thumbnails.default.url}
                                alt=""
                                className="thumbnail-img"
                              />
                            </div>
                            <div className="infomation">
                              <h3 className="title">{channel.snippet.title}</h3>
                              <p className="desc">
                                {channel.snippet.description}
                              </p>
                            </div>
                          </div>
                          <div
                            className="group-option"
                            onClick={addChannelHandler.bind(null, channel)}
                          >
                            <i class="bi bi-cloud-plus"></i>
                            <p className="title">Add</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <i className="bi bi-x-lg close" onClick={close}></i>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div className="channel__center">
        <ChannelList />
      </div>
    </div>
  );
};

export default Channel;
