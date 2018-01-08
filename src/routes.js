import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>

<App>
    {/*Route dentro de Switch para que no se junten los component */}
    <Switch>
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route path="/home" component={Home} />
     <Route component={Page404} />
    </Switch>
</App>;

export default AppRoutes;