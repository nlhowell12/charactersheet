import React, { Component } from 'react';
import { Provider } from 'react-redux'
import ButtonAppBar from 'components/ButtonAppBar';
import Login from 'components/Login'
import Register from 'components/Register'
import Home from 'components/Home'
import reducer from 'reducer'
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
