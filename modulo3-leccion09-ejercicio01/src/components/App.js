import React from 'react';
import Home from './Home';
import Style from '../stylesheets/Style.scss';
import Pricing from './Pricing';
import About from './About';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <main>
          <Switch>
            <Route path="/home">
              <div className='container'></div>
              <Home />
            </Route>
            <Route path="/" component={Home} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
