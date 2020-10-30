import React from 'react';
import {Link} from 'react-router-dom';
import CreateDropdownContainer from '../dropdown/create_dropdown_container';

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
      flag: false
    },
    completePin: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.afterSubmit = this.afterSubmit.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[userId]', this.state.userId);
    formData.append('pin[photo]', this.state.photoFile);
    formData.append('pin[source_link]', this.state.sourceLink);
    // this.props.createPin(formData).then((action) => console.log(action))
    // this.props.createPin(formData).then(() => this.setState({completePin: this.props.pins[this.props.pins.length - 1]}))
  }

  //   afterSubmit() {
  //   const boardPin = (this.props.pins.slice(-1), this.props.boards[0].id)
  //   if (this.props.pins.length !== this.props.pins.length) {
  //   this.props.pinToBoard(boardPin)
  //   } else {
  //   return null;
  //   }
  // }

  // componentDidMount() {
  //   document.addEventListener("dragenter", function(event) {
  //     if ( event.target.className == "upload-space" ) {
  //       event.target.style.border = "none"; 
  //       event.target.style.backgroundColor = 'grey';
  //     }
  //   });
  // }


  componentDidMount() {
    this.props.fetchPins();
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
      this.setState({[field]: e.currentTarget.value}).then(() => {
      return (this.state.photoUrl !== null && this.state.title !== '') ? this.handleSubmit(e) && this.setState({flag: true}) : this.setState({flag: false})
    })}
  }

  render() {
    const { currentUser } = this.props;

    const preview = this.state.photoUrl ? <img className='testing' src={this.state.photoUrl}/> :  <label><i className="fas fa-arrow-circle-up"></i>
    Drag and drop or click to upload
    <input id="pinFile" onChange={this.handleFile} type="file"/></label>
  
    const name = currentUser.firstName && currentUser.lastName ? 'currentUser.fname currentUser.lname' : null;

    const profilePic = currentUser.photoUrl ? (
      <img className="create-pin-profile-image" src={currentUser.photoUrl} />
    ) : (
      <i className="fas fa-user-circle"></i>
    );

    return (
      <div className="create-pin">
        <div className="create-pin-container">
          <form className="create-form">
            <div className="create-pin-catherine">
              <div className="create-text">
                <div className="create-pin-dropdown">
                <CreateDropdownContainer
                  />
              </div>
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
                <button onClick={this.handleSubmit}>submit</button>
                </div>
                <div id="upload-space"
                    onDrop={this.handleDrop}
                    onDragEnter={this.handleDragEnter}
                    onDragOver={this.handleDragOver}>
                    {preview}
               </div>
              </div>
              {/* <div className='create-pin-fun'> */}
          <Link className="back-arrow-create" to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
        </form>
      </div>
    </div>
    );
  }
}