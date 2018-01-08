// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Footer from './Global/Footer';
import Header from './Global/Header';
import Content from './Global/Content';

// Assets
import items from '../components/dataNav';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    //crear la constante que genera el Route (children)\\
    const { children } = this.props;

    return (
      <div className="App">
       <Header Title="React Practice" items={items} />
       {/* children es el props que genera el Route sin cambiar header y footer al estar en Content  */}
       <Content body={children} />
       <Footer copyright="&copy; Colorsync - 2017"/>
        </div>
    );
  }
}

export default App;
