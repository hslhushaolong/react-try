import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redux from './redux';
import shopComponent from './page/shop';
const store = createStore(redux)
class App extends Component {
  constructor (props) {
    super(props)
    this.state={
      num: 0,
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' render={()=> {
              return '首页';
            }}></Route>
            <Route path='/shop' component={shopComponent}></Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
