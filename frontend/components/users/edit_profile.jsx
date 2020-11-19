import React from 'react';


export default class EditProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = this.currentState();

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.currentState = this.currentState.bind(this);
  }

   handleUpdate(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

   currentState() {
        const initialState = Object.assign({}, {
            photoFile: null,
            photoUrl: null,
            firstName: this.props.currentUser.firstName || '',
            lastName: this.props.currentUser.lastName || '',
            username: this.props.currentUser.username ||'',
            id: this.props.currentUser.id,
            photoPreview: null
        });

        return initialState
    }

  // componentDidMount() {
  //   this.props.fetchUser(this.props.currentUser.id)
  // }

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
    delete details["photoPreview"];
    if (!this.state.photoPreview) {
        delete details["photoUrl"];
    }
    // const formData = new FormData();
    // formData.append('user[photo]', this.state.photoFile);
    // formData.append('user[firstName]', this.state.firstName);
    // formData.append('user[lastName]', this.state.lastName);
    // formData.append('user[username]', this.state.username);

    // this.props.updateUser(formData).then(this.props.closeModal)
    const formData = new FormData();
        for (let key in details) {
            formData.append(`user[${key}]`, details[key])
        }
        this.props.updateUser(formData, this.state.id).then(
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

  render() {
     const { currentUser} = this.props;

     const profilePic = currentUser.photoUrl ? (
      <img className="create-pin-profile-image" src={currentUser.photoUrl} />
    ) : (
      <i className="fas fa-user-circle"></i>
    );

    const preview = this.state.photoUrl ? <img className='testing' src={this.state.photoUrl}/> :  <label><i className="fas fa-arrow-circle-up"></i>
    Drag and drop or click to upload
    <input id="pinFile" onChange={this.handleFile} type="file"/></label>

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
                  {preview}
               </div>
            <span>First name</span>
              <h1 id='board-name'>
                <input
                className="create-board-title"
                type="text"
                onChange={this.handleUpdate('firstName')}
                placeholder='Like "Places to Go" or "Recipes to Make"'
                />
              </h1>
              <span>Last name</span>
              <h1 id='board-name'>
                <input
                className="create-board-title"
                type="text"
                onChange={this.handleUpdate('lastName')}
                placeholder='Like "Places to Go" or "Recipes to Make"'
                />
              </h1>
              <span>Username</span>
              <p id='board-details'>
                  <input
                    className="create-board-link"
                    type="text"
                    onChange={this.handleUpdate('username')}
                    placeholder='Choose an optional username'
                  />
              </p>
              <button id='submit-board' onClick={this.handleSubmit}>Create</button>
              {this.renderErrors()}
          </div>
        </div>
      </>
    )}
}