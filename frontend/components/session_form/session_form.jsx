import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
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

  demoUser(e) {
    e.preventDefault();
    this.props.loginDemoUser().then(this.props.closeModal);
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
          <h4 className="session-welcome">Welcome to Pinteriors</h4>
          <h6 className="session-new-ideas">Find new ideas to try</h6>
          
          <div onClick={this.props.closeModal} className="close-x">X</div>
          
          <div className="login-form">
          
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
                className="login-input"
              />
            </label>
            <div className="session-form-add-space">
            </div>
        
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password"
                className="login-input"
              />
            </label>
            
            <div className="session-submit">
              <input type="submit" value={buttonMessage} />
            </div>

            <p className="session-or-message">OR</p>

            <div className="session-submit-demo">
              <button onClick={(e) => {this.demoUser(e)}}>Demo User</button>
            </div>

            {this.renderErrors()}

            <p className="session-terms-message">By continuing, you agree to Pinterior's Terms of Service</p>
            
            <a className="switch-session-form" onClick={() => {this.props.switchForm()}}>{renderMessage}</a>

          </div>
          </form>
          </div>
    );
  }
}

export default withRouter(SessionForm);
