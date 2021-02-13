  import React,{ useState, Fragment } from 'react';


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
   //  <div className="header">
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
           {userInfo && userInfo.isAdmin && 
             <div className='dropdown'>
                 <Link to='#admin'>
                     Admin {' '}<i className='fa fa-caret-down'></i>
                 </Link>
               <ul className='dropdown-content'>
                 <li>
                   <Link to='/dashboard'>Dashboard</Link>
                 </li>
                 <li>
                   <Link to='/createProduct'>Products</Link>
                 </li>
                
                 <li>
                   <Link to='/orderList'>Orders</Link>
                 </li>
                 <li>
                   <Link to='/userList'>Users</Link>
                 </li>

               </ul> 
            
             </div>
          
          
            
           }
               
           </div>
         </header>

     //  </div>
     );
 }

 export default Header



  //new

//   import React from 'react'
// import './Header.css'
// import { Button } from '@material-ui/core'

// import { Link } from 'react-router-dom';



// function Header () {
//   return (
//     <div className='header'>
//       <Link to='/'>
        
//         <Button variant='outlined'>Home
//         </Button>
//       </Link>
      
//       <Link to='/about'> 
//         <Button variant='outlined'>About
//         </Button>

//       </Link>

//       <Link to='/works'>
//         <Button variant='outlined'>Works
//         </Button>
//       </Link>
     
//       <Link to='/resume'>
        
//       <Button variant='outlined'>Resume
//       </Button>
//       </Link>
      
//       <Link to='/contact'>
        
//       <Button variant='outlined'>Contact
//       </Button>
//       </Link>
//     </div>
    


//   )
// }

// export default Header


