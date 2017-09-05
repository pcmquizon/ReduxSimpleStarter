import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.onInputChange = this.onInputChange.bind(this);
  };

  getInitialState() {
    return {
      term: '',
    };
  };

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange} />
       </div>
    );
  };

  onInputChange(event) {
    event.preventDefault();
    let term = event.target.value;
    this.setState({'term': term});
    this.props.onSearchTermChange(term);
  };

}

export default SearchBar;
