import React from 'react';
import Home from './Home';
import '../stylesheets/Style.scss';
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
            <Route path="/pricing">
              <div className='container'></div>
              <Pricing/>
            </Route>
            <Route path="/about">
              <div className='container'></div>
              <About/>
            </Route>
            {/* <Route path="/" component={Home} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/about" component={About} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
