import React, { Component } from 'react';
import './BullionCoins.css';
import store from '../../redux/store';
import { ApiInvestmentCoins } from '../../api_request/api_request';
import Coin from '../../component/Coin/Coin';
import { Route, Routes } from 'react-router-dom';

class BullionCoins extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        ApiInvestmentCoins();
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                data: state.newCoinsTwo
            });
        });
    }

    render() {
        const coins = this.state.data[0];
        return (
            <div className='bullion-coins'>
                {coins && coins.map((item) => (
                    <Coin {...item} />
                ))}
            </div>
        )
    }
}

export default BullionCoins;