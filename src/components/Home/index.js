import React, { Component } from 'react';

import './Home.css';


class Home extends Component {
    constructor() {
        super();
         this.state = {
            name: '',
            password: ''
    };
    this.handleChanged = this.handleChanged.bind(this);
}

handleChanged(e) {
 const name = e.target.name;
 const value = e.target.value;
 this.setState({
     [name] : value
 });

if (name.length === 0) {
    alert("campo incorrecto");
  }else {
      return true;
  }
}




    render() {
        return (

    <div className="Home">

  <div className="Login">
            <h3>Iniciar sesión</h3>
            <div className="inputs">
        <input type="text" id="validUser" name="name" value={this.state.name} placeholder="Username" onChange={this.handleChanged}/>
        <input type="password" id="validPassword" name="password"value={this.state.password} placeholder="Password" onChange={this.handleChanged} />
        <a href="">Registrate</a>
        <button id="validButton" type="submit" className="btn btn-primary btn-block" onSubmit={this.handleSubmit}>Entrar</button>
            </div>

  </div>

    </div>

    );
  }
}

export default Home;