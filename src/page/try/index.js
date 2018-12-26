import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Prompt, Link, Switch} from 'react-router-dom';
const Topic = ({match}) => {
    return <div><h3>{match.params.topicId}</h3></div>
  };
  
class TryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { match } = this.props;
        console.log(this.props);
        return  (<div>
              <h3>我是列表</h3>
                {/* <Prompt message='你确定要离开页面吗？' /> */}
                练习
              <ul>
                <li><Link to={`${match.url}/react`}>a</Link></li>
                <li><Link to={`${match.url}/router`}>b</Link></li>
                <li><Link to={`${match.url}/redux`}>c</Link></li>
              </ul>
              <hr/>
              <Route exact path={`${match.url}/:topicId`} render={(match) => {
                  console.log(match.params.topicId)
                  return 'topicId';
              }}/>
            </div>
        )
    }
    
}

export default TryComponent;
