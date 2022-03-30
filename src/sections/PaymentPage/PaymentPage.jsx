import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Axios from '../../api/Axios'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useNavigate } from 'react-router-dom'
import { getTotalItemsCost } from '../../DataLayer/reducer'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../Checkout/components/CheckoutProduct'
import "./styles/Payment.css"

function PaymentPage() {
    const [{basket, user}, dispatch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()

    const [succeeded, setSucceded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)


    useEffect(() => {
        // generate stripe secret which is used to charge a customer

        const getClientSecret = async () => {
            const response = await Axios({
                method: "post",
                // Stripe expexts the total in a currencies subunits
                url:`/payments/create?total=${getTotalItemsCost(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        if(basket.length){
            getClientSecret()
        }
    }, [basket])

    console.log(clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET"
            })
            navigate("/orders", {replace: true})
        })
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
                    <h3>Delivery Address</h3> </div>
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
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) =>(<><h3>Order Total: {value}</h3></>
                                )}
                                decimalScale={2}
                                value={getTotalItemsCost(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disable || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {/**Error */}
                        {error && <div>{error}</div>}
                        
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage