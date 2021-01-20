import React, {useState} from 'react'
import CheckoutSteps from '../Components/CheckoutSteps'

export default function ShippingAddress() {
    const [fullName, setFullName] = useState('');
    
    const [service, setService] = useState('');
    const [outlet, setOutlet] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <CheckoutSteps step1 step2 />
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Details</h1>
                </div>
                <div>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        type='text'
                        id='fullName'
                        placeholder='Enter your full name'
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='service'>Service method</label>
                    <select  type='text'
                        id='service'
                        placeholder='Choose a service mode'
                        value={service}
                        onChange={e => setService(e.target.value)}
                        required>
                        <option disabled active>Choose a method of service</option>
                        <option >Mode A</option>
                        <option >Mode B</option>
                        <option >Mode C</option>
                 
                    
                    </select>
                       
                    
                </div>
                <div>
                    <label htmlFor='outlet'>Outlet</label>
                    <select 
                        type='text'
                        id='outlet'
                        placeholder='Select an outlet'
                        value={outlet}
                        onChange={e => setOutlet(e.target.value)}
                        required>
                        <option disabled selected hidden>Choose a method of service</option>
                        <option >Shop A</option>
                        <option >Shop B</option>
                        <option >Shop C</option>
                 
                    
                    </select>
                 
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <select>
                        <option disabled selected>Enter your address here</option>
                        <option 
                            type='text'
                            id='address'
                            placeholder='Enter your Address'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            >Enter your Address
                          
                        </option>
                    </select>
                   
                </div>
                <div>
                    <label htmlFor='phone'>Phone</label>
                    <input
                        type='text'
                        id='phone'
                        placeholder='Enter your functional Phone number'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>Continue</button>
               </div>
            </form>
        </div>
    )
}
