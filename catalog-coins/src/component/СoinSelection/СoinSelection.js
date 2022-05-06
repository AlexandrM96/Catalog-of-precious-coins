import React, { Component } from 'react';
import './СoinSelection.css';
import { Link } from 'react-router-dom';
import BullionCoins from '../../../src/component/СoinSelection/img/South_Vietnamese_Dong_1.png';
import ExclusiveCoins from '../../../src/component/СoinSelection/img/ISK_2.png';
import CommemorativeCoins from '../../../src/component/СoinSelection/img/Looney_1.png';

class СoinSelection extends Component {

    render() {
        return (
            <section className='coin-selection'>
                <div className='coin-selection__block'>
                    <h2 className='coin-selection__block-title'>Bullion coins</h2>
                    <Link to='/billionCoins'>
                        <button className='coin-selection__block-button'>Show all &gt;</button>
                    </Link>
                    <div className='coin-selection__block-image'>
                        <img src={BullionCoins} alt='coin' />
                    </div>
                </div>
                <div className='coin-selection__block'>
                    <h2 className='coin-selection__block-title'>Exclusive coins</h2>
                    <Link to='/exclusiveCoins'>
                        <button className='coin-selection__block-button'>Show all &gt;</button>
                    </Link>
                    <div className='coin-selection__block-image'>
                        <img src={ExclusiveCoins} alt='coin' />
                    </div>
                </div>
                <div className='coin-selection__block'>
                    <h2 className='coin-selection__block-title'>Commemorative coins</h2>
                    <Link to='/commemorativeCoins'>
                        <button className='coin-selection__block-button'>Show all &gt;</button>
                    </Link>
                    <div className='coin-selection__block-image'>
                        <img src={CommemorativeCoins} alt='coin' />
                    </div>
                </div>
            </section>
        )
    }
}

export default СoinSelection;