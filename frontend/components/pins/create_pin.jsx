import React from 'react';
import {Link} from 'react-router-dom';
import LoadingIcon from '../loading/loading';

export default class CreatePin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: {
      title: '',
      description: '',
      sourceLink: '',
      userId: this.props.currentUser.id,
      photoFile: null,
      photoUrl: null,
    },
    clicked: false,
    toggleSelect: 'Choose a board',
    currentBoard: 0,
    boardId: 0,
    pinned: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
     this.closeDropdown = this.closeDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchPins();
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true})
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[userId]', this.state.userId);
    formData.append('pin[photo]', this.state.photoFile);
    formData.append('pin[source_link]', this.state.sourceLink);
    this.setState({boardId: e.currentTarget.value})
    this.props.createPin(formData).then((action) => this.props.pinToBoard({pinId: action.pin.id, boardId: this.state.boardId}) && this.props.history.push(`/pins/${action.pin.id}`))
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

  // pinboard(e) {
  //   e.preventDefault();
  //   this.props.createPin(this.props.pin).then(() => this.props.pinToBoard({pinId: this.props.completePin.id, boardId: e.target.value}))
  // }

  toggleSelect(board) {
    this.setState({toggleSelect: board.title, currentBoard: board.id})
  }

  handleButton(e) {
    e.preventDefault();

    this.handleSubmit(e);
  }

   handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        let file = e.dataTransfer.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) { 
          fileReader.readAsDataURL(file) 
        }
    };

  handleFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleUpdate(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  render() {
    const { currentUser, boards } = this.props;

    if (this.state.loading) {
      return <LoadingIcon />;
    }

    const preview = this.state.photoUrl ? <img className='testing' src={this.state.photoUrl}/> :  <label><i className="fas fa-arrow-circle-up"></i>
    Drag and drop or click to upload
    <input id="pinFile" onChange={this.handleFile} type="file"/></label>
  
    const name = currentUser.firstName && currentUser.lastName ? 'currentUser.fname currentUser.lname' : null;

    // const pinMessage = (this.state.pinned == true) ?
    //   <p id='success-message-pin'>Redirecting to your new pin...pleasebe patient ;)</p>
    // : null;

    const profilePic = currentUser.photoUrl ? (
      <img className="create-pin-profile-image" src={currentUser.photoUrl} />
    ) : (
      <i className="fas fa-user-circle"></i>
    );

    const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))

    const dropdown = (currentUserBoards.length > 0) ? (
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
          <button className="dropdown-button2" value={this.state.currentBoard} onClick={(e) => this.handleSubmit(e)}>Save</button>
        ) : <button className="dropdown-button2" value={this.state.currentBoard} onClick={(e) => this.handleSubmit(e)}>Save</button>}
      </div>
      </div>
    </div>
     ) : <button className='link-board-modal' onClick={() => this.props.openModal({modal: 'createboard', currentUser: this.props.currentUser})}>You don't have any boards to pin to yet! Click to create one now</button>;
  

    return (
      <div className="create-pin">
        <div className="create-pin-container">
          <form className="create-form">
            <div className="create-pin-catherine">
              <div className="create-text">
                <div className="create-pin-dropdown">
                {dropdown}
              </div>
              {/* {pinMessage} */}
                <h1>
                  <input
                    className="create-pin-title"
                    type="text"
                    onChange={this.handleUpdate('title')}
                    placeholder="Add your title"
                  />
                </h1>
                <div className='create-pin-image'>{profilePic}</div>
                {/* <p>{name}</p> */}
                <p className='create-pin-p'>
                  <input
                    className="create-pin-body"
                    type="text"
                    onChange={this.handleUpdate('description')}
                    placeholder="tell everyone what your Pin is about"
                  />
                </p>
                <p className='create-pin-p2'>
                  <input
                    className="create-pin-link"
                    type="text"
                    onChange={this.handleUpdate('sourceLink')}
                    placeholder="Add a destination link"
                  />
                </p>
                </div>
                <div id="upload-space"
                    onDrop={this.handleDrop}
                    onDragEnter={this.handleDragEnter}
                    onDragOver={this.handleDragOver}>
                    {preview}
               </div>
              </div>
          <Link className="back-arrow-create" to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
        </form>
      </div>
    </div>
    );
  }
}