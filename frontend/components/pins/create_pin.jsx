import React from 'react';
import {Link} from 'react-router-dom';
import DropdownContainer from '../dropdown/dropdown_container';

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
    }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[userId]', this.state.userId);
    formData.append('pin[photoUrl]', this.state.photoFile);
    formData.append('pin[sourceLink]', this.state.sourceLink);
    this.props.createPin(formData).then(e.target.reset())
    .then(() => this.afterSubmit())
  }

    afterSubmit() {
    const boardPin = (this.props.pins.slice(-1), this.props.boards[0].id)
    if (this.props.pins.length !== this.props.pins.length) {
    this.props.pinToBoard(boardPin)
    } else {
    return null;
    }
  }

  // componentDidUpdate(prevProps) {
  //   this.props.fetchPins();
  //   // const boardPin = (this.props.pins.slice(-1), this.props.board.i)
  //   if (prevProps.pins.length !== this.props.pins.length) {
  //     this.props.pinToBoard(this.props.pins.slice(-1).id, this.props.boards[0].id)
  //   } else {
  //     return null;
  //   }
  // }


  handleFile(event) {
    const file = event.target.files[0];
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

//   dragAndDrop(e) {
//     ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
//       dropArea.addEventListener(eventName, preventDefaults, false);
//     });
//   }

//   previewFile(file) {
//     let reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = function() {
//       let photo = document.createElement('photo')
//       photo.src = reader.result
//       document.getElementById('gallery').appendChild(photo)
//   }
// }


  render() {
    const { currentUser } = this.props;

    const name =
      currentUser.firstName && currentUser.lastName
        ? 'currentUser.fname currentUser.lname'
        : null;

    const profilePic = currentUser.photoUrl ? (
      <img className="create-pin-profile-image" src={currentUser.photoUrl} />
    ) : (
      <i className="fas fa-user-circle"></i>
    );

    return (
      <div className="create-pin">
        <div className="create-pin-container">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <div className="create-pin-dropdown">
              <DropdownContainer />
            </div>
            <div className="create-pin-catherine">
              <div className="create-text">
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
              <div className="drop-area">
                <div className='create-pin-fun'>
                  <p id="drop-text">Drag and drop to upload</p>
                  <input id="pinFile" onChange={this.handleFile} type="file" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <Link className="back-arrow-create" to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    );
  }
}

