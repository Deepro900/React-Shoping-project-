import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/About">About</Link>
                    {
                        user?.uid ?
                            <button className='btn-logout' onClick={logOut}>Log Out</button>
                            :
                            <>
                                <Link to="/login">LogIn</Link>
                                <Link to="/signUp">SignUp</Link>
                            </>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Header;