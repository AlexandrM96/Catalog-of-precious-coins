import React, { Component } from 'react';
import './MainPage.css';
import СoinSelection from '../../../src/component/СoinSelection/СoinSelection';
import Search from '../../component/Search/Search';

class MainPage extends Component {

    state = {
        AdvancedFilterButton: false,
        quality: "",
        country: "",
        metal: "",
        from_year: "",
        to_year: "",
        from_price: "",
        to_price: "",
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

    render() {
        const filter = this.state.AdvancedFilterButton;
        return (
            <section className='main-page'>
                <div className='main-page__container'>
                    <h1 className='main-page__title'>Homepage</h1>
                    <div className='main-page__form-container'>
                        <Search />
                    </div>
                    <div className='main-page__Coins-filter'>
                        <button
                            className='main-page__Coins-filter-button'
                            onClick={this.clickAdvancedFilterButton}>
                            Advanced filter
                            <span>&lt;</span>
                        </button>
                    </div>
                    {filter === false ?
                        <СoinSelection />
                        :
                        <div className='main-page__advanced-filter'>
                            <div className='main-page__advanced-filter-block'>
                                <form className='main-page__advanced-filter-form'>
                                    <h5 className='main-page__advanced-filter-title'>Issuing country</h5>
                                    <select className='main-page__advanced-filter-select'>
                                        <option value="Issuing country">Issuing country</option>
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
                                    <select className='main-page__advanced-filter-select'>
                                        <option value="Metal">Metal</option>
                                        <option value="gold">Gold</option>
                                        <option value="nickel">Nickel</option>
                                        <option value="steel">Steel</option>
                                        <option value="silver">Silver</option>
                                    </select>
                                    <h5 className='main-page__advanced-filter-title'>Quality of the coin</h5>
                                    <select className='main-page__advanced-filter-select'>
                                        <option value="Quality of the coin">Quality of the coin</option>
                                        <option value="BU">BU</option>
                                    </select>
                                </form>
                            </div>
                            <div className='main-page__advanced-filter-block'>
                                <form className='main-page__advanced-filter-form'>
                                    <h5 className='main-page__advanced-filter-title'>Price</h5>
                                    <div className='main-page__advanced-filter-form-block'>
                                        <div className='main-page__advanced-filter-form-input-block'>
                                            from <input className='main-page__advanced-filter-form-input' />
                                        </div>
                                        <div className='main-page__advanced-filter-form-input-block'>
                                            to <input className='main-page__advanced-filter-form-input' />
                                        </div>
                                    </div>
                                    <h5 className='main-page__advanced-filter-title'>Year of issue</h5>
                                    <div className='main-page__advanced-filter-form-block'>
                                        <div className='main-page__advanced-filter-form-input-block'>
                                            from <input className='main-page__advanced-filter-form-input' />
                                        </div>
                                        <div className='main-page__advanced-filter-form-input-block'>
                                            to <input className='main-page__advanced-filter-form-input' />
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

export default MainPage;