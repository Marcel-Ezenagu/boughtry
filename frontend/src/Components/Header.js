import React,{ useState } from 'react';

import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';


function Header() {

    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (e, { name }) => setActiveItem(name);

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  }

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
            {userInfo ?
              (<div className='dropdown'>
                <Link to='#'>
                  {userInfo.name} <i className="fa fa-caret-down" ></i>{' '}
                </Link>
                <ul className='dropdown-content'>
                  <Link to='#singout' onClick={signoutHandler}>Sing Out</Link>
                </ul>
              </div>

              ) : (
                <Link to="/signin">Sign In</Link>
              )
            }
               
          </div>
        </header>
      </>
    );
}

export default Header
