import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import { GOOGLE_API_KEY } from './../config';

import SearchBar from './searchBar';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.videoSearch = this.videoSearch.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);

    this.videoSearch();
  };

  getInitialState() {
    return {
      videos: [],
      defaultTerm: 'welcome',
      selectedVideo: null,
    };
  };

  videoSearch(term=this.state.defaultTerm) {
    YTSearch({
      key: GOOGLE_API_KEY,
      term: term
    }, (videos) => {
      this.setState({'videos': videos,
                    'selectedVideo' : videos[0]});
    });
  };

  onVideoSelect(video) {
    this.setState({'selectedVideo' : video});
  };

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  };
};

export default App;
