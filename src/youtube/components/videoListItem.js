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
      <li className='list-group-item media' onClick={this.onVideoSelect}>
        <div className='video-list'>
          <img className='d-flex align-self-start mr-3 media-object' src={this.props.video.snippet.thumbnails.default.url} alt='' />
          <div className='media-body'>
            <div className='mt-0'>
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
