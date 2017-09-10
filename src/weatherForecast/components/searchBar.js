import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  getInitialState() {
    return {
      query: ''
    };
  };

  onInputChange(event) {
    event.preventDefault();
    this.setState({query: event.target.value});
  };

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.query);
    this.setState({query: ''});
  };

  render() {
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input type="text"
               className="form-control"
               value={this.state.query}
               onChange={this.onInputChange}
               placeholder={this.props.placeholder}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);
