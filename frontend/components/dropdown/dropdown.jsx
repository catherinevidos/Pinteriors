import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
    }
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
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


  render(){
    const { currentUser, boards } = this.props;


    const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))

    if (boards.length > 0) {
    return (
      <div className="dropdown">
        <div className="dropdown-child">
          <button id="dropdown-button1" onClick={this.handleClick}>
            <span>{currentUserBoards[0].title}<i className="fas fa-chevron-down"></i></span>
            {this.state.clicked ? (
              <ul onClick={(e) => e.stopPropagation()} className="dropdown-ul">
                {currentUserBoards.map((board) => (
                  <li key={board.id}>{board.title}</li>
                ))}
              </ul>
            ) : null}
          </button>
          <div id="dropdown-child2">
            <button className="dropdown-button2" value={currentUserBoards[0].id}>Save</button>
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