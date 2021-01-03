import React,{ useState } from 'react';

import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {

    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (e, { name }) => setActiveItem(name);

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    return (
    <>
        <Menu pointing secondary>
                
                <Menu.Item >
                    <Image
                        size="tiny"
                        src="/images/logo.jpg"
                        alt='logo'
                        as={Link}
                        to='/'
                        rounded
                    />
                
                </Menu.Item>
                {userInfo ? (
                    
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sign Out'
                        active={activeItem === 'sign Out'}
                        onClick={handleItemClick}
                        as={Link}
                        to="#signOut"
                    />
            
                </Menu.Menu>
                     ) : (
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='sign In'
                            active={activeItem === 'sign In'}
                            onClick={handleItemClick}
                            as={Link}
                            to="/signin"
                        />
                        
                        <Menu.Item
                            name='register'
                            active={activeItem === 'register'}
                            onClick={handleItemClick}
                            as={Link}
                            to="/register"
                        />
                    </Menu.Menu> 
                )};
                
            </Menu>
        </> 
    );
}

export default Header
