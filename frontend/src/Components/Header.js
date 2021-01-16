import React,{ useState } from 'react';

import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {

    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (e, { name }) => setActiveItem(name);

   // const userSignin = useSelector(state => state.userSignin);
   // const { userInfo } = userSignin;

    return (
      <>
        <header className="row">
                <div >
            <Link to='/'>
              
                        <img className="small" alt='LOGO' /> 
                        
                    </Link>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
      </>
    );
}

export default Header
