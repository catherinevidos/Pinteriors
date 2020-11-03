import React from 'react';

export default class CreateDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      toggleSelect: 'Choose a board',
      currentBoard: 0,
    }
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.pinboard = this.pinboard.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchPins();
  }

  closeDropdown() {
    this.setState({clicked: false }, () => {
      document.removeEventListener('click', this.closeDropdown);
      document.getElementById("dropdown-child2").style.width = '';
      document.getElementById("dropdown-button1").style.width = '';
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({clicked: true }, () => {
      document.addEventListener("click", this.closeDropdown);
      document.getElementById("dropdown-child2").style.width = '0px';
      document.getElementById("dropdown-button1").style.width = '250px';
    });
  }

  pinboard(e) {
    e.preventDefault();

    this.props.createPin(this.props.pin)
    .then(() => this.props.pinToBoard({pinId: this.props.completePin.id, boardId: e.target.value}))
  }

  toggleSelect(board) {
    this.setState({toggleSelect: board.title, currentBoard: board.id})
  }

  handleButton(e) {
    e.preventDefault();

    this.pinboard(e);
  }


  render(){
    const { currentUser, boards } = this.props;


    const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))

    if (currentUserBoards.length > 0) {
    return (
      <div className="dropdown">
        <div className="dropdown-child">
          <div id="dropdown-button1" onClick={this.handleClick}>
            <span id='selected-dropdown'>{this.state.toggleSelect}</span><i className="fas fa-chevron-down"></i>
            {this.state.clicked ? (
              <ul onClick={(e) => e.stopPropagation()} className="dropdown-ul">
                <p id='all-boards'>All boards</p>
                {currentUserBoards.map((board, idx) => (
                  <div key={idx} id='dropdown-list-wrapper'>
                    <li onClick={() => this.toggleSelect(board)}>{board.title}</li>
                    <button value={board.id} onClick={(e) => this.handleButton(e)}>save</button>
                  </div>
                ))}
              </ul>
            ) : null}
          </div>
          <div id="dropdown-child2">
            {(this.state.toggleSelect !== 'Choose a board') ? (
              <button className="dropdown-button2" value={this.state.currentBoard} onClick={(e) => this.pinboard(e)}>Save</button>
            ) : <button className="dropdown-button2" value={this.state.currentBoard} onClick={(e) => this.pinboard(e)}>Save</button>}
          </div>
        </div>
      </div>
    );} else {
      return null;
    }
  }
}

