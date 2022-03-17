import React from 'react'
import "./style/Header.css"
import SearchIcon from "@material-ui/icons/Search"
import { ShoppingBasket } from '@material-ui/icons'

function Header() {
  return (
    <div className="header">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="logo" />
        <div className="header__search">
            <input className="header__search-Input" type="text" />
            <SearchIcon className='header__search-Icon'/>
        </div>

        <div className="header__nav">
            <div className="header__option">
                <span className="header__option-lineOne">Hello Guest</span>
                <span className="header__option-lineTwo">Sign In</span>
            </div>
            <div className="header__option">
                <span className="header__option-lineOne">Returns</span>
                <span className="header__option-lineTwo">& Orders</span>
            </div>
            <div className="header__option">
                <span className="header__option-lineOne">Your</span>
                <span className="header__option-lineTwo">Prime</span>
            </div>
            <div className="header__option-Basket">
                <ShoppingBasket/>
                <span className="header__option-lineTwo header__basketCount">0</span>
            </div>
        </div>
    </div>
  )
}

export default Header