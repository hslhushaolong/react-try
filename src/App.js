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

  // 用于确认导航的功能, 配合Prompt, 默认
  getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition);
  }

  render() {
    const flag = 'pushState' in window.history
    console.log(flag);

  // forceRefresh: bool
  // 如果为 true ，在导航的过程中整个页面将会刷新。
  // 一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。

    return (
      <Provider store={store}>
        <Router getUserConfirmation={this.getConfirmation} forceRefresh={!flag} >
          <Switch>
            {/* 首页 */}
            <Route exact path='/' render={(props)=> {
              // return <Link to='/shop/1212'>跳转</Link>; // this.props.match.id
              return <Link to={{
                pathname: '/try',
                // search: '?dssss=12',
                // state: { data: ['sdsdsdss']}
              }} replace={false}>跳转</Link>;
              // return <span onClick={() => this.onClickPush(props)}>跳转</span>
            }}></Route>
            {/* <Route path='/shop' component={shopComponent}></Route> */}
            {/* <Route path='/shop/:id' render={(props)=> {
              console.log(props)
              return 'shop'
            }}></Route> */}
            <Route exact path='/try' component={TryComponent}></Route>
            <Route exact path='/log' render={()=>{
              return 'log';
            }}></Route>
            <Route exact path='/shop/two' render={(props)=>{
              console.log(props);
              return '二级路由页面';
            }}></Route>
            <Route exact path='/error' render={()=>{
              return 'error';
            }}></Route>
            {/* <Redirect from='*' to='/error' /> */}
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
