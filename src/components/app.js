import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import YT_API_KEY from './../config'

import SearchBar from './searchBar';
import VideoList from './videoList';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.fetchVideos = this.fetchVideos.bind(this);
    
    //this.fetchVideos();
  };
  
  getInitialState() {
    return {
      videos: [],
      defaultTerm: 'welcome'
    };
  };
  
  fetchVideos() {  
    YTSearch({
      key: YT_API_KEY,
      term: this.state.defaultTerm
    }, (videos) => {
      this.setState({'videos' : videos});
    });
  };
  
  render() {
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  };
};

export default App;