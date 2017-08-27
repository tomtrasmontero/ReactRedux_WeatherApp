import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    // bind(this) = this is SearchBar component
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // always get an event object when using the dom
  onInputChange(event) {
    const currentValue = event.target.value;
    // bug - event.target.value will no longer exist inside setState
    // so have a variable to save it outside
    this.setState(() => ({ term: currentValue }));
  }

  onFormSubmit(event) {
    // prevent the browser sending the form and refreshing the page
    // *****important********
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    // empty out search string and force react to re-render
    this.setState(() => ({ term: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        {/* change componenet state when there is an input */}
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          // value of the input
          value={this.state.term}
          // this function will run on each change of the input
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


// hook up container with the action creator at bottom of component
// function binds fetchWeather to our componenet
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
// first arg is about state, we put null because we do not need to change the
// state here.  connect will bind the action fetchWeather func to SearchBar
// component and can be acces by props
export default connect(null, mapDispatchToProps)(SearchBar);
