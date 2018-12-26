import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class TryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Prompt when={true} message='sdsfsdfsd' />
                sdfghnbmn
            </div>
        );
    }
}

export default TryComponent;
