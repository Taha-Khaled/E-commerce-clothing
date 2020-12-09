import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header =()=>(
    <div className='header'>
        <Link to ='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/content' className='option'>Contact us</Link>
        </div>
    </div>
)

export default Header;