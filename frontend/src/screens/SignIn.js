import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
import { signIn } from '../actions/userActions';

export default function SignIn (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1]
        : '/';

    const userSignIn = useSelector((state) => state.userSignin);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signIn(email, password));
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);


    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>

                </div>
                <div>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='Enter email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>

                <div>
                <label htmlFor='password'>Password </label>
                <input
                    type='password'
                    id='password'
                    placeholder='Enter password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>
                        Sign In
                    </button>
                </div>

                <div>
                    <label />
                    <div>
                        New customer? {' '}
                        <Link to='/register'>Create your account</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}
