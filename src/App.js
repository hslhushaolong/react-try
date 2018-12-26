import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redux from './redux';
import shopComponent from './page/shop';
import TryComponent from './page/try'
const store = createStore(redux)
const shop = function() {
  return 'dsds';
};
class App extends Component {
  constructor (props) {
    super(props)
    this.state={
      num: 0,
    }
  }

  onClickPush = (props) => {
    console.log(props)
    const path = {
      pathname: '/shop',
      start: {data: ['sds']}
    }
    props.history.push(path)
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* 首页 */}
            <Route exact path='/' render={(props)=> {
              // return <Link to='/shop/1212'>跳转</Link>; // this.props.match.id
              return <Link to={{
                pathname: '/shop',
                // search: '?dssss=12',
                state: { data: ['sdsdsdss']}
              }} replace={false}>跳转</Link>;
              // return <span onClick={() => this.onClickPush(props)}>跳转</span>
            }}></Route>
            {/* <Route path='/shop' component={shopComponent}></Route> */}
            {/* <Route path='/shop/:id' render={(props)=> {
              console.log(props)
              return 'shop'
            }}></Route> */}
            <Route exact path='/shop' component={TryComponent}></Route>
            <Route path='/log' render={()=>{
              return 'log';
            }}></Route>
            <Route exact path='/error' render={()=>{
              return 'error';
            }}></Route>
            <Redirect from='*' to='/error' />
              {/* <Route path='/shop' render={(props)=> {
              console.log(props)
              return 'shop'
            }}></Route> */}
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
