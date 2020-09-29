// need to figure out how to get pins to come in here and call my search function with the pins. this could be the wrong way. work in progress

import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: [],
      searchPhrase: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchPhrase: e.target.value })
  }

  // searchFunc = () => {
  //   return this.state.pins.filter(pin => pin.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  // }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
    <div className="searchbar-container">
        <form className="searchbar-form" onSubmit={this.onSubmit}>
          <input
            type="search"
            className="searchbar-input"
            onChange={this.handleChange}
            value={this.state.initialSearch}
            placeholder="Search"
            results="0"
          />
          <span>
            <button type="subimt" className="searchbar-submit-button"></button>
          </span>
        </form>
      </div>
    );
  }
}