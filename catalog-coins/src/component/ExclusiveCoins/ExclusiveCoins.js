import React, { Component } from 'react';
import './ExclusiveCoins.css';
import store from '../../redux/store';
import { ApiExclusiveCoins } from '../../api_request/api_request';
import Coin from '../../component/Coin/Coin';
import { Route, Routes } from 'react-router-dom';

class ExclusiveCoins extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        ApiExclusiveCoins();
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                data: state.newCoinsThree
            });
        });
    }

    render() {
        const coins = this.state.data[0];
        return (
            <div className='exclusive-coins'>
                {coins && coins.map((item) => (
                    <Coin {...item} />
                ))}
            </div>
        )
    }
}

export default ExclusiveCoins;