import React, { Component } from 'react';
import '../MainPage/MainPage.css';
import ListCoins from '../../component/ListCoins/ListCoins';
class ListOfTheCoins extends Component {

    state = {
        AdvancedFilterButton: false
    }

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
                    <h1 className='main-page__title'>List of the coins</h1>
                    <div className='main-page__form-container'>
                        <h4 className='main-page__form-title'>Input field</h4>
                        <form className='main-page__form'>
                            <input className='main-page__form-input' />
                            <button className='main-page__form-button'>Search</button>
                        </form>
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
                            <ListCoins/>
                        :
                        <div className='main-page__advanced-filter'>
                            <div className='main-page__advanced-filter-block'>
                                <form className='main-page__advanced-filter-form'>
                                    <h5 className='main-page__advanced-filter-title'>Issuing country</h5>
                                    <select className='main-page__advanced-filter-select'>
                                        <option value="dog">filter</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                    </select>
                                    <h5 className='main-page__advanced-filter-title'>Metal</h5>
                                    <select className='main-page__advanced-filter-select'>
                                        <option value="dog">filter</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
                                    </select>
                                    <h5 className='main-page__advanced-filter-title'>Quality of the coin</h5>
                                    <select className='main-page__advanced-filter-select'>
                                        <option value="dog">filter</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="hamster">Hamster</option>
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

export default ListOfTheCoins;