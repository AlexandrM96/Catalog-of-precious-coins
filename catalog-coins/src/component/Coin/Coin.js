import React, { Component } from 'react';
import './coin.css';

class Coin extends Component {

    render() {
        const { title, info, img } = this.props;
        return (
            <div className='coin'>
                <div className='coin_image-block'>
                    <img src={img} alt='coin' />
                </div>
                <div className='coin_info-block'>
                    <h4 className='coin_info-title'>{title}</h4>
                    <p className='coin_info-info'>{info}</p>
                </div>
            </div>
        )
    }
}

export default Coin;