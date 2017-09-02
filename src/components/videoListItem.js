import React, { Component } from 'react';

class VideoListItem extends Component {
  render() {
    return(
      <li className='list-group-item'>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src='' alt='' />
          </div>
          <div className='media-body'>
            <div className='media-heading'>
              desc
            </div>
          </div>
        </div>
      </li>
    );
  };
}

export default VideoListItem;
