import React, { Component } from 'react';
import './Coin.css';
import { Link } from 'react-router-dom';

class Coin extends Component {

requestCountId = () => {

}

    render() {
        const { Title, Paragraph_One, Img_one } = this.props;
        return (
            <div className='coin'>
                <div className='coin_image-block'>
                    <img src={Img_one} alt='coin' />
                </div> 
                <div className='coin_info-block'>
                    <Link className='coin_info-Link' to='/coinPage'>
                        <h4 onClick={this.requestCountId} className='coin_info-title'>{Title}</h4>
                    </Link>
                    <p className='coin_info-info'>{Paragraph_One}</p>
                </div>
            </div>
        )
    }
}

export default Coin;