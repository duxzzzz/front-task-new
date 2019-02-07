import React, { Component } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
							<Route path="/" exact component={() => (<Landing/>)} />
							<Route path="/contact-us" component={()=> (<Contact/>)} />
						</Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
