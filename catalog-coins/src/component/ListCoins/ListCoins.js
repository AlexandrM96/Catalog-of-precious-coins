import React, { Component } from 'react';
import './ListCoins.css';
import store from '../../redux/store';
import Coin from '../Coin/Coin';
import userEvent from '@testing-library/user-event';

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
        const { metal, country, quality } = this.props;
        console.log('propssss', this.props);
        return (
            <div className='list-coins'>
                <button onClick={this.click}></button>
                {coins && coins.filter((item) =>
                    (item.Composition === metal ?
                        metal : !metal)
                            && (country === "" ?
                            true : country === item.Issuing_Country ? country : !country)
                                && (quality === "" ?
                                true : quality === item.Quality ? quality : !quality)
                ).map((item) => (
                    <div className='coin' key={item.id}>
                        <Coin {...item} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ListCoins;