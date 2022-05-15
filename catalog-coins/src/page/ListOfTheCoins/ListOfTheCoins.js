import React, { Component } from 'react';
import '../MainPage/MainPage.css';
import ListCoins from '../../component/ListCoins/ListCoins';
import Search from '../../component/Search/Search';
import { Link } from 'react-router-dom';
import store from '../../redux/store';

class ListOfTheCoins extends Component {

    state = {
        AdvancedFilterButton: false,
        quality: "",
        country: "",
        metal: "",
        from_year: 1,
        to_year: 2023,
        from_price: 1,
        to_price: 2000
    }

    searhCoin = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    clickAdvancedFilterButton = () => {
        this.state.AdvancedFilterButton === false ?
            this.setState({
                AdvancedFilterButton: true
            })
            :
            this.setState({
                AdvancedFilterButton: false
            })
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const state = store.getState();
            state.arrCoins && this.setState({
                data: state.arrCoins[0]
            });
        });
    }

    render() {
        const filter = this.state.AdvancedFilterButton;
        return (
            <section className='main-page'>
                <div className='main-page__container'>
                    <h1 className='main-page__title'>List of the coins</h1>
                    <div className='main-page_navi'>
                        <Link className='main-page_navi-Link' to='/'>
                            <p>Homepage</p>
                        </Link>
                        <p>-</p>
                        <p>List of the coins</p>
                    </div>
                    <div className='main-page__form-container'>
                        <Search {...this.state} />
                    </div>
                    <div className='main-page__Coins-filter'>
                        <button
                            className='main-page__Coins-filter-button'
                            onClick={this.clickAdvancedFilterButton}>
                            Advanced filter
                        </button>
                        {filter === false ?
                            <span className='main-page__Coins-filter-span'>&#709;</span>
                            :
                            <span className='main-page__Coins-filter-span'>&#708;</span>
                        }
                    </div>
                    {filter === false ?
                        <ListCoins {...this.state} />
                        :
                        <div className='main-page__advanced-filter'>
                            <div className='main-page__advanced-filter-block'>
                                <form className='main-page__advanced-filter-form'>
                                    <h5 className='main-page__advanced-filter-title'>Issuing country</h5>
                                    <select
                                        id="country"
                                        name="country"
                                        onChange={this.searhCoin}
                                        className='main-page__advanced-filter-select'>
                                        <option value=""></option>
                                        <option value="CANADA">Canada</option>
                                        <option value="China">China</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Iran">Iran</option>
                                        <option value="India">India</option>
                                        <option value="UNITED STATES OF AMERICA">UNITED STATES OF AMERICA</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="the Weimar Republic">the Weimar Republic</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="British Virgin Islands">British Virgin Islands</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Australia">Australia</option>
                                        <option value="France">France</option>
                                        <option value="the Belgian Congo">the Belgian Congo</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="British South Africa">British South Africa</option>
                                        <option value="the Republic of Vietnam">the Republic of Vietnam</option>
                                    </select>
                                    <h5 className='main-page__advanced-filter-title'>Metal</h5>
                                    <select
                                        id="metal"
                                        name="metal"
                                        onChange={this.searhCoin}
                                        className='main-page__advanced-filter-select'>
                                        <option value=""></option>
                                        <option value="gold">Gold</option>
                                        <option value="nickel">Nickel</option>
                                        <option value="steel">Steel</option>
                                        <option value="silver">Silver</option>
                                    </select>
                                    <h5 className='main-page__advanced-filter-title'>Quality of the coin</h5>
                                    <select
                                        id="quality"
                                        name="quality"
                                        onChange={this.searhCoin}
                                        className='main-page__advanced-filter-select'>
                                        <option value=""></option>
                                        <option value="BU">BU</option>
                                    </select>
                                </form>
                            </div>
                            <div className='main-page__advanced-filter-block'>
                                <form className='main-page__advanced-filter-form'>
                                    <h5 className='main-page__advanced-filter-title'>Price</h5>
                                    <div className='main-page__advanced-filter-form-block'>
                                        <div className='main-page__advanced-filter-form-input-block'>
                                            from <input
                                                type='number'
                                                name='from_price'
                                                onChange={this.searhCoin}
                                                className='main-page__advanced-filter-form-input' />
                                        </div>
                                        <div className='main-page__advanced-filter-form-input-block'>
                                            to <input
                                                type='number'
                                                name='to_price'
                                                onChange={this.searhCoin}
                                                className='main-page__advanced-filter-form-input' />
                                        </div>
                                    </div>
                                    <h5 className='main-page__advanced-filter-title'>Year of issue</h5>
                                    <div className='main-page__advanced-filter-form-block'>
                                        <div className='main-page__advanced-filter-form-input-block'>
                                            from <input
                                                type='number'
                                                name='from_year'
                                                onChange={this.searhCoin}
                                                className='main-page__advanced-filter-form-input' />
                                        </div>
                                        <div className='main-page__advanced-filter-form-input-block'>
                                            to <input
                                                type='number'
                                                name='to_year'
                                                onChange={this.searhCoin}
                                                className='main-page__advanced-filter-form-input' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </section>
        )
    }
}

export default ListOfTheCoins;