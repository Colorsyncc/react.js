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

handleChanged(e, type) {

 const value = e.target.value;
 if (type === "name") {
     this.setState({
         name : value
     });
 } else {
    this.setState({
        password : value
    })
 }


function validate() {
    if (value.length === 0) {
        console.log("Campo obligatorio");
    } else {
        return true;
    };
  }
validate(value);

}


    render() {
        return (

    <div className="Home">

  <div className="Login">
            <h3>Iniciar sesión</h3>
            <div className="inputs">
        <input type="text" id="validUser" name="name"  placeholder="Username" onChange={(e) => this.handleChanged(e, "name")}/>
        <input type="password" id="validPassword" name="password" placeholder="Password" onChange={this.handleChanged} />
        <a href="">Registrate</a>
        <button id="validButton" type="submit" className="btn btn-primary btn-block" onSubmit={this.handleSubmit}>Entrar</button>
            </div>

  </div>

    </div>

    );
  }
}

export default Home;