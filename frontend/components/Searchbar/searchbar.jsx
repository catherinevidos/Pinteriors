import React from 'react';
import {withRouter} from 'react-router-dom';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: this.props.searchPins,
      searchTerm: ''
    };
    this.update = this.update.bind(this);
    // this.searchFunc = this.searchFunc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    this.props.fetchPins();
  }

 update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    }, () => {
      this.searchFunc();
    })
  }

  searchFunc() {
    let filtered = [];
    if (this.state.searchTerm.length > 0) {
      filtered = this.props.pins.filter(pin => pin.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    } else {
      this.handleSubmit();
    }
    this.setState({filtered: filtered})
  }


  handleKey(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e)
    }
  }

  handleSubmit(e) {
    if (e !== undefined) {
      e.preventDefault();
      this.props.history.push('/search');
      this.props.updateSearch(this.state.filtered);
    } else {
      this.props.history.push('/');
      this.clearForm();
    }
  }

  clearForm() {
    this.setState({searchTerm: ''})
  }

  render() {

    return (
      <>
    <div className="searchbar-container">
          <input
            type="search"
            id="searchbar-input"
            onChange={this.update('searchTerm')}
            value={this.state.searchTerm}
            placeholder="Search for a pin by title"
            onKeyPress={this.handleKey}
          />
      </div>
    </>
    );
  }
}

export default withRouter(Searchbar);