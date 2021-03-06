import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { register, signin } from '../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

export default function Register(props) {
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    
  const userRegister = useSelector(state => state.userRegister);
  const { userInfo, loading, error } = userRegister;

    const redirect = props.location.search ?
        props.location.search.split('=')[1] : '/'

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault(); 
        if (password !== confirmPassword) {
            alert('Password and ConfirmPassword do not match')
        } else {
            
        //signIn action
        dispatch(register(email, password));
   
        } }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox />}
                {error && <MessageBox variant='danger'>{error}</MessageBox>}
               
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='name'
                        id='name'
                        placeholder='Enter your name'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email address</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Enter your password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                
                <div>
                    <label htmlFor='confirmPassword'>confirmPassword</label>
                    <input
                        type='confirmPassword'
                        id='confirmPassword'
                        placeholder='Re-enter your Password'
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label />
                    <button className="primary" type='submit'>Register</button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account?{' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
