import { Domain } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css' 
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer'
import CurrencyFormat from "react-currency-format";
import axios from './axios'
import { db } from './firebase'

function Payment() {

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [{ basket, user }, dispatch] = useStateValue()


  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        //Stripe expects the total in a currency sub-units e.g cents for dollar, kobo for naira
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();

  }, [basket])

  console.log('The secret IS >>>', clientSecret)


const handleSubmit = async (event) => {
  
    //some fancy stripe stuffs
    event.preventDefault();
    setProcessing(true);
  
  const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement)
    }
  }).then(({ paymentIntent }) => {
          //paymentIntent = payment confrimation
    
    db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
    })
    
    
    

    
      setSucceeded(true);
      setError(null)
      setProcessing(false)
      
    dispatch({
        type: 'EMPTY_BASKET'
      })
      
      history.replace('/orders')


  })  
  
}

const handleChange = event => {
    //listen for changes in the CardElement
    //and display any error as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
}

  return (
    <div className='payment'>
      
      <div className='payment__container'>
      <h1>
        Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
      </h1>

        {/* payment section - delivery section */}
       <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Onitsha, Nigeria</p>
          </div>
        </div>
        {/* payment section - delivery section */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>

        {/* payment section - delivery section */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
              {/* Stripe magics go here */} 
              <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>

                    <div className='payment__priceContainer' > 
                     <CurrencyFormat
                        renderText={(value) => (
                            <h3>Order Total: {value}</h3>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'} 
                        />
                        
                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                          {/* error */}
                          {error && <div>{error}</div>}                        
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
