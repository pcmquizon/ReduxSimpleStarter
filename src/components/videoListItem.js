import React, { Component } from 'react';

class VideoListItem extends Component {

  constructor(props) {
    super(props);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  };

  onVideoSelect() {
    this.props.onVideoSelect(this.props.video);
  };

  render() {
    return(
      <li className='list-group-item' onClick={this.onVideoSelect}>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src={this.props.video.snippet.thumbnails.default.url} alt='' />
          </div>
          <div className='media-body'>
            <div className='media-heading'>
              {this.props.video.snippet.title}
            </div>
            <div>
              {this.props.video.snippet.description}
            </div>
          </div>
        </div>
      </li>
    );
  };
};

export default VideoListItem;
