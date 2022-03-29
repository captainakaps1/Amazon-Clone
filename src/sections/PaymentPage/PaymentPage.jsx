import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../Checkout/components/CheckoutProduct'
import "./styles/Payment.css"

function PaymentPage() {
    const [{basket, user}] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(true)

    const handleSubmit = e => {

    }
const handleChange = event => {
        setDisable(event.empty)
        setError(event.error ? event.error.message : "")
    }

  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>Checkout (<Link to="/checkout">{basket.length} items</Link>)</h1>
            {/* Payment Delivery details Address */}
            <div className="payment__section">
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    {user? <p>{user.email}</p>:""}
                     <p>123 Accra, Kumasi</p>
                     <p>Ghana</p>
                </div>
            </div>

            {/* Payment Review Items */}
            <div className="payment__section">
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                </div>
            </div>

            {/* Payment Method Section */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/**Stripe */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage