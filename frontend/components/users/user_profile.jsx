import React from 'react';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.pins = this.pins.bind(this);
    // this.filterPins = this.filterPins.bind(this);
  }

componentDidMount() {
  this.props.fetchBoards();
  this.props.fetchPins()
}

pins() {
  const currentUserBoards = this.props.boards.filter(board => (board.userId === this.props.currentUser.id))
  
  // if (currentUserBoards.length > 0) {
  //   this.filterPins(currentUserBoards)
  // }
}

// filterPins(currentUserBoards) {
//   // console.log(currentUserBoards);
//   // const boardPins = this.props.pins.filter(pin => (currentUserBoards.pinIds.includes(pin.id)))

//   let filtered = [];
//   for(let i = 0; i < currentUserBoards.length; i++) {
//     filtered = currentUserBoards.filter(board => (
//       (board.pinIds.includes(this.props.pins[i].id))
//     ))
//   }
//   console.log(filtered)
// }

render() {
  const { currentUser, boards, pins } = this.props;


  const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))
  

  if (boards.length > 0) {
  return (
    <ul id='board-list'>
        {currentUserBoards.map(board => (
          <div id='board-show-list'>
            <div id='pin-image-wrapper'>
              <div id='pin-image1'></div>
              <div id='pin-image2'></div>
              <div id='pin-image3'></div>
            </div>
            <div id='board-text'>
              <li key={board.id}>{board.title}</li>
              <p>{board.pinIds.length} Pins</p>
            </div>
          </div>
        ))}
    </ul> 
  )} else {
    return (
    <p>You don't have any boards yet!</p>
    );
  }
  }
}