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
            state.arrCoins && this.setState({
                data: state.arrCoins
            });
        });
        store.dispatch({
            type: 'AD',
            payload: {
                a: 'dd',
            }
        })
    }

    click = () => {
        console.log('dataaa', this.state.data);// показывает
        store.dispatch({
            type: 'AD',
            payload: {
                a: 'dd',
            }
        })
    }
    
    render() {
        const coins = this.state.data;
        const { metal, country, quality, from_price, to_price, from_year, to_year } = this.props;
        console.log('dataaa', this.state.data)
        return (
            <div className='list-coins'>
                {/* <button onClick={this.click}>тест стейта</button> */}
                {coins && coins.filter((item) =>
                    (item.Composition === metal ?
                        metal : !metal)
                    && (country === "" ?
                        true : country === item.Issuing_Country ? country : !country)
                    && (quality === "" ?
                        true : quality === item.Quality ? quality : !quality)
                    && (+from_price === 1 && +to_price === 2000 ?
                        true : +from_price <= +item.Price && +to_price >= +item.Price ?
                            +from_price || +to_price : !from_price || !to_price)
                    && (+from_year === 1 && +to_year === 2023 ?
                        true : +from_year <= +item.Year_Year && +to_year >= +item.Year_Year ?
                            +from_year || +to_year : !from_year || !to_year)
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