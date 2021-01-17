import React,{ useState } from 'react';

import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {

    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (e, { name }) => setActiveItem(name);

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  
   // const userSignin = useSelector(state => state.userSignin);
   // const { userInfo } = userSignin;

    return (
      <>
        <header className="row">
                <div >
            <Link to='/'>
                <h2>LOGO</h2>
                        {/* <img className="small" alt='LOGO' /> 
                         */}
                    </Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
                <span className='badge' >{cartItems.length} </span>)} 
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
      </>
    );
}

export default Header
