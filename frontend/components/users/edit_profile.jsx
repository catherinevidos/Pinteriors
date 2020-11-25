import React from 'react';
import LoadingIcon from '../loading/loading';

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
            id: this.props.currentUser.id,
            loading: false
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
    delete details["loading"];
    this.setState({loading: true})
    if (this.state.photoFile === null) {
      delete details["photoFile"];
    }
    
    const formData = new FormData();
        for (let key in details) {
            formData.append(`user[${key}]`, details[key])
        }
        this.props.updateUser(formData, this.props.currentUser.id).then(
            () => location.reload(false) && this.setState({loading: false})
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

    if (this.state.loading) {
    return <LoadingIcon />;
    }

      
    let preview = (this.state.photoUrl) ? <img className="edit-user-profile-image" src={this.state.photoUrl}></img> : <label><i className="fas fa-arrow-circle-up"></i><span>Drag and drop or click to upload</span><input id="pinFile" onChange={this.handleFile} type="file"/></label>

     let current = (currentUser.photoUrl) ? <img className="edit-user-profile-image" src={currentUser.photoUrl}></img> : null;

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
            <div id='upload-space-wrapper'>
             <div id="upload-space-edit"
                    onDrop={this.handleDrop}
                    onDragEnter={this.handleDragEnter}
                    onDragOver={this.handleDragOver}>
                 {preview}
            </div>
               {current}
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
              <button className='submit-board' onClick={this.handleSubmit}>Create</button>
              {this.renderErrors()}
          </div>
        </div>
      </>
    )}
}