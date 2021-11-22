import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '/home/sanjuli/dev/projects/crwn-clothing/src/assets/crown.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-coontainer' to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
              SHOP  
            </Link>
            <Link className="option" to="/shop">
              CONTACT  
            </Link>
        </div>
    </div>
)
export default Header;