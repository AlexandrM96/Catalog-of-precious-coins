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
            state.newCoins && this.setState({
                data: state.newCoins[0]
            });
        });
    }

    click = () => {
            console.log('dataaa',this.state.data);// показывает стейт
    }
    render() {
        const coins = this.state.data;
        const { metal, country, quality } = this.props;
        console.log('propssss', this.props);
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