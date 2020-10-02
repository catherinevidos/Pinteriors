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
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({clicked: true }, () => {
      document.addEventListener("click", this.closeDropdown);
    })
  }

  render(){
    const { currentUser, boards } = this.props;


    const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))

    if (boards.length > 0) {
    return (
      <div className="dropdown">
        <div className="dropdown-child">
          <button className="dropdown-button1" onClick={this.handleClick}>
            {currentUserBoards[0].title}
            {this.state.clicked ? (
              <ul onClick={(e) => e.stopPropagation()} className="dropdown-ul">
                {currentUserBoards.slice(1).map((board) => (
                  <li key={board.id}>{board.title}</li>
                ))}
              </ul>
            ) : null}
          </button>
          <div className="dropdown-child2">
            <button className="dropdown-button2">Save</button>
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