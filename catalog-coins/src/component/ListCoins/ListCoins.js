import React, { Component } from 'react';
import './ListCoins.css';
import store from '../../redux/store';
import Coin from '../Coin/Coin';

class ListCoins extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                data: state.newCoins
            });
        });
    }

    render() {
        const coins = this.state.data[0];
        return (
            <div className='list-coins'>
                {coins && coins.map((item) => (
                    <Coin {...item} />
                ))}
            </div>
        )
    }
}

export default ListCoins;