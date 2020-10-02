import React from 'react';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchBoards();
  // }

render() {
  // const { currentUser, boards } = this.props;


  // const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))
  
  return null;
}

//   if (boards.length > 0) {
//   return (
//     <div className="dropdown">
//       <div className="dropdown-child">
//         <button className="dropdown-button1" onClick={this.handleClick}>
//           {currentUserBoards[0].title}
//           {this.state.clicked ? (
//             <ul onClick={(e) => e.stopPropagation()} className="dropdown-ul">
//               {currentUserBoards.slice(1).map((board) => (
//                 <li key={board.id}>{board.title}</li>
//               ))}
//             </ul>
//           ) : null}
//         </button>
//         <div className="dropdown-child2">
//           <button className="dropdown-button2">Save</button>
//         </div>
//       </div>
//     </div>
//   );} else {
//     return null;
//   }
}