import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    let renderMessage;
    let buttonMessage;
    if (this.props.formType === 'login') {
      renderMessage = 'Not on Pinteriors yet? Sign Up';
      buttonMessage = 'Continue';
    } else {
      renderMessage = 'Already a member? Log in';
      buttonMessage = 'Sign Up';
    }
  
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h4>Welcome to Pinteriors</h4>
          <h6>Find new ideas to try</h6>
          <br/>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
          
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
                className="login-input"
              />
            </label>
            
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="username"
                className="login-input"
              />
            </label>
        
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password"
                className="login-input"
              />
            </label>
            
            <input className="session-submit" type="submit" value={buttonMessage} />
            <p>By continuing, you agree to Pinterior's Terms of Service</p>
            <a onClick={() => {this.props.switchForm()}}>{renderMessage}</a>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
