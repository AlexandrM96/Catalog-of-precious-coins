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
   
    click = () => {
        console.log(this.state.data);// показывает стейт
    }
    render() {
        const coins = this.state.data[0];
        return (
            <div className='list-coins'>
                <button onClick={this.click}></button>
                {coins && coins.map((item) => (
                    <div className='coin' key={item.id}>
                        <Coin {...item} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ListCoins;