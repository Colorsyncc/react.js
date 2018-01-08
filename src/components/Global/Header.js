import React, {Component} from 'react';
import{ Link } from 'react-router-dom';

import './css/Header.css';


class Header extends Component {

    render() {
        const {Title, items} = this.props;

    return(
        <div className="Header-title">
            <h1>{Title}</h1>

            <ul className="Menu">
                {items && items.map((items, key) => <li key={key}><Link to={items.url}> {items.title}</Link></li> )}

            </ul>
        </div>


    );
  }
}

export default Header;
