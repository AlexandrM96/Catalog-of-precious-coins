import React, { Component } from 'react';
import './CoinPage.css';

class CoinPage extends Component {

    render() {
        const { Title, Paragraph_One, Img_one } = this.props;
        return (
            <div className='coin'>
                <div className='coin_image-block'>
                    <img src={Img_one} alt='coin' />
                </div>
                <div className='coin_info-block'>
                    <h4 className='coin_info-title'>{Title}</h4>
                    <p className='coin_info-info'>{Paragraph_One}</p>
                </div>
            </div>
        )
    }
}

export default CoinPage;