import React from 'react';
import VideoListItem from './videoListItem';

//*
const VideoList = (props) => {
  const videoItems = props.videos.map((video, index) => {
    return <VideoListItem key={video.etag} video={video} />;
  });
    
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};
//*/

/*
class VideoList extends React.Component {
  render() {
    return(
      <ul className="col-md-4 list-group">
        [{this.props.videos.length}]
      </ul>
    );
  };
}
//*/

export default VideoList;