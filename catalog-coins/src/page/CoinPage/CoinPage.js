import React, { Component } from 'react';
import './CoinPage.css';
import store from '../../redux/store';
import { Link } from 'react-router-dom';

class CoinPage extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        
        store.subscribe(() => {
            const state = store.getState();
            state.newCoinTwo &&
                this.setState({
                    data: state.newCoinTwo[0]
                });
        });
    }

    render() {
        const coin = this.state.data;
        return (
            <>
                {coin && coin.map((item) =>
                    <div className='coin-page' key={item.id}>
                        <div className='coin-page_img-container'>
                            <div className='coin-page_img-block'>
                                <img src={item.Img_one} alt='coin' />
                            </div>
                            <div className='coin-page_img-block'>
                                <img src={item.Img_two} alt='coin' />
                            </div>
                        </div>
                        <div className='coin-page_info-block'>
                            <div className='coin-page_info'>
                                <h1>{item.Title}</h1>
                                <p>{item.Paragraph_One}</p>
                                <p>{item.Paragraph_Two}</p>
                                <p>{item.Paragraph_Three}</p>
                            </div>
                            <table className='coin-page_table'>
                                <tbody>
                                    <tr>
                                        <td>Issuing Country</td>
                                        <td>{item.Issuing_Country}</td>
                                    </tr>
                                    <tr>
                                        <td>Composition</td>
                                        <td>{item.Composition}</td>
                                    </tr>
                                    <tr>
                                        <td>Quality</td>
                                        <td>{item.Quality}</td>
                                    </tr>
                                    <tr>
                                        <td>Denomination</td>
                                        <td>{item.Denomination}</td>
                                    </tr>
                                    <tr>
                                        <td>Year</td>
                                        <td>{item.Year_Year}</td>
                                    </tr>
                                    <tr>
                                        <td>Weight</td>
                                        <td>{item.Weight}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{item.Price}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='coin-page_link-container'>
                                <Link className='coin-page_link-back' to='/listOfTheCoins'>
                                    Back to the List
                                </Link>
                            </div>
                        </div>
                    </div>)}
            </>


        )
    }
}

export default CoinPage;