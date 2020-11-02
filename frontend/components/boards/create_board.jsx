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
  }

   handleUpdate(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    const board = Object.assign({}, this.state)
    this.props.createBoard(board).then(this.props.closeModal);
  }

  render() {
    return (
      <>
        <div className="create-board-container">
          <div onClick={this.props.closeModal} className="close-x">
            <i className="fas fa-times"></i>
          </div>
          <div className="modal-pinboard-text">
            <h1>Create board</h1>
          </div>
          <div>
              <h1>
                <input
                className="create-board-title"
                type="text"
                value={this.state.title}
                onChange={this.handleUpdate('title')}
                placeholder='Like "Places to Go" or "Recipes to Make"'
                />
              </h1>
              <p className='create-board-p'>
                  <input
                    className="create-board-link"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleUpdate('description')}
                    placeholder='Optional additional info about your new board'
                  />
              </p>
            <button onClick={this.handleSubmit}>Create</button>
          </div>
        </div>
      </>
    )}
}