import React from 'react';
import {Link} from 'react-router-dom';
import DropdownContainer from '../dropdown/dropdown_container';

export default class CreatePin extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[title]', this.state.title);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
  }

  handleFile(){
    
  }



  render(){
    const { currentUser } = this.props;

    const name = (currentUser.fname && currentUser.lname) ? (
    'currentUser.fname currentUser.lname' ) : null;

       const profilePic = currentUser.photoUrl ? (
           <img className="nav-profile-image" src={currentUser.photoUrl} />
         ) : (
           <i className="fas fa-user-circle"></i>
         );

    return (
      <div className="create-pin">
        <div className="create-pin-container">
          <form className='create-form' onSubmit={this.handleSubmit}>
            <DropdownContainer />
            <h1>
              <input
                className="create-pin-title"
                type="text"
                placeholder="Add your title"
              />
            </h1>
            <div>{profilePic}</div>
            <p>{name}</p>
            <p>
              <input
                className="create-pin-body"
                type="text"
                placeholder="tell everyone what your Pin is about"
              />
            </p>
            <p>
              <input
                className="create-pin-link"
                type="url"
                placeholder="Add a destination link"
              />
            </p>
            <div className="create-pin-upload">
              <input className="create-pin-upload-child" type="file" />
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