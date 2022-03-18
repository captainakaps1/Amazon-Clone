import React from 'react'
import "./styles/Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../../StateProvider'
import { getTotalItemsCost } from '../../../DataLayer/reducer'

export default function Subtotal() {
  const [{basket}] = useStateValue()
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value) => (
        <>
            <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
            <small className='subtotal__gift'>
                <input type="checkbox" /> This order contains a gift
            </small>
        </>)}
        decimalScale={2}
        value={getTotalItemsCost(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}/>

        <button>Proceed to Checkout</button>
    </div>
  )
}

