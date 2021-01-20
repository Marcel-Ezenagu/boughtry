import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

export default function SigninScreen(props) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo, loading, error } = userSignin;

    const redirect = props.location.search
        ?
        props.location.search.split('=')[1]
        : '/'

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault(); 
        //signIn action
        dispatch(signin(email, password));
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox />}
                {error && <MessageBox variant='danger'>{error}</MessageBox>}
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
                    <label />
                    <button className="primary" type='submit'>Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer?{' '}
                        <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
