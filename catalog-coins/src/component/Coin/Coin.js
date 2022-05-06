import React, { Component } from 'react';
import './Coin.css';
import { Link } from 'react-router-dom';
import IMG from '../../image_counts/25 cents_1.png';

class Coin extends Component {

    render() {
        const { Title, Paragraph_One, img } = this.props;
        return (
            <div className='coin'>
                <div className='coin_image-block'>
                    <img src={IMG} alt='coin' />
                </div>
                <div className='coin_info-block'>
                    <h4 className='coin_info-title'>{Title}</h4>
                    <p className='coin_info-info'>{Paragraph_One}</p>
                </div>
            </div>
        )
    }
}

export default Coin;