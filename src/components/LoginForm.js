import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value

    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length >0){
      this.props.handleLogin({username:this.state.username, password:this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
