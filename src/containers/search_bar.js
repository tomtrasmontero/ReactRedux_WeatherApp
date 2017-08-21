import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    // bind(this) = this is SearchBar component
    this.onInputChange = this.onInputChange.bind(this);
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
