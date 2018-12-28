import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Topics extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        const { match } = this.props;
            return (
              <div>
                <h2>Topics</h2>
                <ul>
                  <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                  </li>
                  <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                  </li>
                  <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                  </li>
                </ul>
          
                <Route path={`${match.path}/:topicId`} render={(props) => {
                    return <div>{props.match.params.topicId}</div>;
                }} />
                <Route
                  exact
                  path={match.path}
                  render={() => <h3>Please select a topic.</h3>}
                />
              </div>
        )
    }
}
export default Topics;