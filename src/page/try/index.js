import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Prompt, NavLink, Link } from 'react-router-dom';

class Topics extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render () {
        const { match } = this.props;
        console.log(this.props);
            return (
              <Router basename={match.url}>
              <div>
                <h2>Topics</h2>
                {/* <Prompt when={true} message='你确定要跳转页面吗' /> */}
                {/* <Prompt message={location => {
                    return `你确定要跳转到${location.pathname}吗？`;
                    }} /> */}

                <ul>
                  <li>
                    <Link replace to={`/rendering`} >Rendering with React</Link>
                  </li>
                  <li>
                    <NavLink activeStyle={{ color: 'red'}} to={`/components`}>Components</NavLink>
                  </li>
                  <li>
                    <NavLink activeStyle={{ color: 'red'}} to={`/props-v-state`}>Props v. State</NavLink>
                  </li>
                </ul>
          
                <Route path={`/:topicId`} render={(props) => {
                    return <div>{props.match.params.topicId}</div>;
                }} />
                <Route
                  exact
                  path={match.path}
                  render={() => <h3>Please select a topic.</h3>}
                  // children={() => <h3>Please select a topic.</h3>}
                />
              </div>
              </Router>
        )
    }
}
export default Topics;