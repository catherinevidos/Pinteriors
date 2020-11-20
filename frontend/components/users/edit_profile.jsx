import React from 'react';
import AvatarEditor from 'react-avatar-editor';


export default class EditProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = this.currentState();

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.currentState = this.currentState.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

   handleUpdate(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

   currentState() {
        const initialState = Object.assign({}, {
            photoUrl: null,
            photoFile: null,
            first_name: this.props.currentUser.firstName || '',
            last_name: this.props.currentUser.lastName || '',
            username: this.props.currentUser.username ||'',
            id: this.props.currentUser.id
        });

        return initialState
    }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="session-errors" 
              key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


    handleSubmit(e) {
    e.preventDefault();
    const details = Object.assign({}, this.state);
    delete details["id"];
    delete details["photoUrl"];
    if (this.state.photoFile === null) {
      delete details["photoFile"];
    }
    
    const formData = new FormData();
        for (let key in details) {
            formData.append(`user[${key}]`, details[key])
        }
        this.props.updateUser(formData, this.props.currentUser.id).then(
            () => location.reload(false)
        )
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
          this.setState({ photoFile: file, photoUrl: fileReader.result});
        };
        if (file) { 
          fileReader.readAsDataURL(file) 
        }
    };


  handleFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
     const { currentUser} = this.props;

     let handleImg;
      if (this.props.currentUser.photoUrl) {
      handleImg =  
      <div>
        {/* <label><i className="fas fa-arrow-circle-up"></i>
        <span>Drag and drop or click to upload</span> */}
        <input id="pinFile" onChange={this.handleFile} type="file"/>
        <AvatarEditor 
          image={this.props.photoUrl}
          width={250}
          height={250}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}/>
      </div>
    } else if (this.state.photoUrl) {
      handleImg =  <AvatarEditor 
          image={this.state.photoUrl}
          width={250}
          height={250}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}/>
    } else {
      handleImg = 
      <label><i className="fas fa-arrow-circle-up"></i>
      <span>Drag and drop or click to upload</span>
      <input id="pinFile" onChange={this.handleFile} type="file"/></label>
    }

    //  const profilePic = currentUser.photoUrl ? (
    //   <img className="create-pin-profile-image" src={currentUser.photoUrl} />
    // ) : (
    //   <i className="fas fa-user-circle"></i>
    // );

    return (
      <>
        <div className="create-board-container">
          <div onClick={this.props.closeModal} className="close-x-board">
            <i className="fas fa-times"></i>
          </div>
          <div className="modal-pinboard-text">
            <h1>Edit Profile</h1>
          </div>
          <div className='create-board-inputs'>
             <div id="upload-space"
                    onDrop={this.handleDrop}
                    onDragEnter={this.handleDragEnter}
                    onDragOver={this.handleDragOver}>
                {handleImg}
               </div>
            <span>First name</span>
              <h1 id='board-name'>
                <input
                className="create-board-title"
                type="text"
                onChange={this.handleUpdate('first_name')}
                placeholder='Like "Places to Go" or "Recipes to Make"'
                value={this.state.first_name}
                placeholder='Enter your first name'
                />
              </h1>
              <span>Last name</span>
              <h1 id='board-name'>
                <input
                className="create-board-title"
                type="text"
                onChange={this.handleUpdate('last_name')}
                value={this.state.last_name}
                placeholder='Enter your last name'
                />
              </h1>
              <span>Username</span>
              <p id='board-details'>
                  <input
                    className="create-board-link"
                    type="text"
                    onChange={this.handleUpdate('username')}
                    value={this.state.username}
                    placeholder='Choose a username'
                  />
              </p>
              <button id='submit-board' onClick={this.handleSubmit}>Create</button>
              {this.renderErrors()}
          </div>
        </div>
      </>
    )}
}