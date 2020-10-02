import React from 'react';
import {Link} from 'react-router-dom';
import DropdownContainer from '../dropdown/dropdown_container';

export default class CreatePin extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      pin: {
      title: '',
      description: '',
      sourceLink: '',
      userId: this.props.currentUser.id,
      photoFile: null,
      photoUrl: null
    }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[sourceLink]', this.state.sourceLink);
    formData.append('pin[userId]', this.state.userId);
    formData.append('pin[photoUrl]', this.state.photoFile);
    this.props.createPin(formData)
  }

  componentDidUpdate(prevProps) {
    this.props.fetchPins();
    if (prevProps.pins.length !== this.props.pins.length) {
      this.props.pinToBoard(this.props.pins.slice(-1), this.props.boards[0])
    } else {
      return null;
    }
  }


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
    debugger
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  render() {
    const { currentUser } = this.props;

    const name =
      currentUser.firstName && currentUser.lastName
        ? 'currentUser.fname currentUser.lname'
        : null;

    const profilePic = currentUser.photoUrl ? (
      <img className="nav-profile-image" src={currentUser.photoUrl} />
    ) : (
      <i className="fas fa-user-circle"></i>
    );

    return (
      <div className="create-pin">
        <div className="create-pin-container">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <DropdownContainer />
            <h1>
              <input
                className="create-pin-title"
                type="text"
                onChange={this.handleUpdate('title')}
                placeholder="Add your title"
              />
            </h1>
            <div>{profilePic}</div>
            <p>{name}</p>
            <p>
              <input
                className="create-pin-body"
                type="text"
                onChange={this.handleUpdate('description')}
                placeholder="tell everyone what your Pin is about"
              />
            </p>
            <p>
              <input
                className="create-pin-link"
                type="text"
                onChange={this.handleUpdate('sourceLink')}
                placeholder="Add a destination link"
              />
            </p>
            <div className="create-pin-upload">
              <input
                className="create-pin-upload-child"
                onChange={this.handleFile}
                type="file"
              />
            </div>
            <button>submit</button>
          </form>
        </div>
        <Link className="back-arrow-create" to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    );
  }
}
