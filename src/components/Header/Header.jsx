import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header/header.css';

import Links from './Links';

/**
 * TODO: Properly style the header, mainly the links in a neat row under the logo
 * TODO: Get a logo
 */

const Header = () => {
    return (
        <div id='main-head'>
            <section id='top-head-section' className='logo-wrap'>
                <div className='logo-contain'>
                    <div className='logo'>X</div>
                </div>
            </section>
            <section id='bottom-head-section' className='links-wrap'>
                <div className='links-wrap'>
                    <Links />
                </div>
            </section>
        </div>
    );
};

export default Header;