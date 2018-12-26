import React from 'react';
import { connect } from 'react-redux';
import { ADD, DEL } from '../../redux/action';
// import PropTypes from 'prop-types';

class ShopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNum: props.addNum,
        };
    }

    onClickNum = (type, id) => {
        if(type === 'add') {
            this.props.dispatch({
                type: ADD,
                id,
            })
        }else {
            this.props.dispatch({
                type: DEL,
                id,
            })
        }
    }

    renderChild = () => {
        const { addNum } = this.state;

        return addNum.map((item) => {
            return (
                <div key={item.id}>
                    <button onClick={() => this.onClickNum('del', item.id)}>-</button>
                    <span>{`商品价格${item.num}`}</span>
                    <button onClick={() => this.onClickNum('add', item.id)}>+</button>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                {this.renderChild()}
            </div>
        );
    }
}

function mapStateToProps (state ) {
    return {
        addNum: state.addNum
    }
}
export default connect(mapStateToProps)(ShopComponent);
