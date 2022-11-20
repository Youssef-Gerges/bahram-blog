import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../../assets/imges/logo.png';
import './Nav.scss';

const Nav: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const toggleHandler = (): void => {
        setShow(!show);
    }
    const closeHandler = (): void => {
        setShow(false);
    }

    return (
        <div>
            <nav>
                <Link to={'/'} className='logo'>
                    <img src={Logo} alt='logo here' />
                </Link>
                <ul className={show ? 'show' : ''}>
                    <li>
                        <Link to={'/popular'} onClick={closeHandler}>Popular</Link>
                    </li>
                    <li>
                        <Link to={'/new'} onClick={closeHandler}>New</Link>
                    </li>
                    <li>
                        <Link to={'/reading-list'} onClick={closeHandler}>Reading list</Link>
                    </li>
                    <li>
                        <Link to={'topics'} onClick={closeHandler}>Topics</Link>
                    </li>
                    <li>
                        <Link to={'subscribe'} onClick={closeHandler}>Subscribe</Link>
                    </li>
                </ul>
                <div className="buttons">
                    <AiOutlineMenu fontSize={'1.2em'} className={`toggle-icon ${show ? 'hidden' : null}`} onClick={toggleHandler} />
                    <AiOutlineClose fontSize={'1.2em'} className={`close-icon ${show ? 'show' : 'hidden'}`} onClick={toggleHandler} />
                    <AiOutlineSearch fontSize={'1.3em'} className='search-icon' />
                </div>
            </nav >
        </div>
    );
}

export default Nav;
