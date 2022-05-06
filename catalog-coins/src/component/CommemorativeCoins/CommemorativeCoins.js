import React, { Component } from 'react';
import './CommemorativeCoins.css';
import store from '../../redux/store';
import { ApiCommemorativeCoins } from '../../api_request/api_request';
import Coin from '../../component/Coin/Coin';
import { Route, Routes } from 'react-router-dom';

class CommemorativeCoins extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        ApiCommemorativeCoins();
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                data: state.newCoinsOne
            });
        });
    }

    render() {
        const coins = this.state.data[0];
        return (
            <div className='commemorative-coins'>
                {coins && coins.map((item) => (
                    <Coin {...item} />
                ))}
            </div>
        )
    }
}

export default CommemorativeCoins;