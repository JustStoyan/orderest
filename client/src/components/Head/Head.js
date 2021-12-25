import { Component } from 'react';
import GuestNav from './GuestNav';

import './Head.css';

class Head extends Component {

    render() {
        return (
            <div className='head-wrapper'>
                <GuestNav />
            </div>
        );
    }
}


export default Head;