import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to={'/'} className='logo'>
                    <img src={Logo} alt='logo here' />
                </NavLink>
                <ul className={show ? 'show' : ''}>
                    <li>
                        <NavLink to={'/popular'}
                            onClick={closeHandler}
                            className={({ isActive }) => isActive ? 'active-nav-link' : ''}
                        >
                            Popular
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/new'}
                            onClick={closeHandler}
                            className={({ isActive }) => isActive ? 'active-nav-link' : ''}
                        >
                            New
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/reading-list'}
                            onClick={closeHandler}
                            className={({ isActive }) => isActive ? 'active-nav-link' : ''}
                        >
                            Reading list
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'topics'}
                            onClick={closeHandler}
                            className={({ isActive }) => isActive ? 'active-nav-link' : ''}
                        >
                            Topics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'subscribe'}
                            onClick={closeHandler}
                            className={({ isActive }) => isActive ? 'active-nav-link' : ''}
                        >
                            Subscribe
                        </NavLink>
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
