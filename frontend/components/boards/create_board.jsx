import React from 'react';


export default class CreateBoard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

   handleUpdate(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="session-errors" 
              key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    const board = Object.assign({}, this.state)
    this.props.createBoard(board).then((this.props.closeModal) && window.location.reload());
  }

  render() {
    return (
      <>
        <div className="create-board-container">
          <div onClick={this.props.closeModal} className="close-x-board">
            <i className="fas fa-times"></i>
          </div>
          <div className="modal-pinboard-text">
            <h1>Create board</h1>
          </div>
          <div className='create-board-inputs'>
            <span>Name</span>
              <h1 id='board-name'>
                <input
                className="create-board-title"
                type="text"
                value={this.state.title}
                onChange={this.handleUpdate('title')}
                placeholder='Like "Places to Go" or "Recipes to Make"'
                />
              </h1>
              <span>Details</span>
              <p id='board-details'>
                  <input
                    className="create-board-link"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleUpdate('description')}
                    placeholder='Optional additional info about your new board'
                  />
              </p>
              <button id='submit-board' onClick={this.handleSubmit}>Create</button>
              {this.renderErrors()}
          </div>
        </div>
      </>
    )}
}