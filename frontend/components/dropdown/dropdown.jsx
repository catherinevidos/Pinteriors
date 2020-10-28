import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      toggleSelect: 'Choose a board',
      currentBoard: 0
    }
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.pinboard = this.pinboard.bind(this);
  }



  componentDidMount() {
    this.props.fetchBoards() 
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
    this.props.pinToBoard(this.props.pinId, e.target.value)
  }

  toggleSelect(board) {
    this.setState({toggleSelect: board.title, currentBoard: board.id})
    console.log(board);
  }

  // handleButton(e) {
  //   e.preventDefault();
  //   document.getElementById('selected-dropdown')
  //   this.setState({toggleSelect: false});
  //   return e.target.value.title;
  // }


  render(){
    const { currentUser, boards } = this.props;


    const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))


    if (boards.length > 0) {
    return (
      <div className="dropdown">
        <div className="dropdown-child">
          <div id="dropdown-button1" onClick={this.handleClick}>
            <span id='selected-dropdown'>{this.state.toggleSelect}<i className="fas fa-chevron-down"></i></span>
            {this.state.clicked ? (
              <ul onClick={(e) => e.stopPropagation()} className="dropdown-ul">
                <p id='all-boards'>All boards</p>
                {currentUserBoards.map((board, idx) => (
                  <>
                  <li key={board.id} onClick={() => this.toggleSelect(board)}>{board.title}</li>
                  {/* <button key={idx} value={board.id}>save</button> */}
                  </>
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

{/* <ul className="dropdown-content">
  {currentUserBoards.map((board) => (
    <li key={board.id}>
      {board.title}
      {/* <button onClick={this.handleClick}>Save</button> */}
//     </li>
//   ))}
// </ul>; */}