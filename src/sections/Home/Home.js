import React from 'react'
import Product from '../../components/Products/Product'
import './style/Home.css'


function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="heroImage" />
            
            <div className="home__products">
                <Product id={12321341} title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – September 13, 2011" price={29.99} rating={5} image = 'https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'/>

                <Product id={49538094} title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black" price={239.0} rating={4} image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SX450_.jpg"/>
            </div>
            <div className="home__products">
              <Product id={4903850} title="Smartwatch for Android/iOS Phones, Heart Rate Monitor, Sleep Tracking, Fitness Tracker with Pedometer" image="https://m.media-amazon.com/images/I/51cqFdS+ztL._AC_SY355_.jpg" price={35.99} rating={4}/>

              <Product id={23445930} title="Echo Studio - High-fidelity smart speaker with 3D audio and Alexa that fits your style" price={98.9} image="https://m.media-amazon.com/images/I/7178rOrkObL._AC_SX425_.jpg" rating={5}/>
              <Product id={3254354345} title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Silver" image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SX342_.jpg" rating={5} price={3643}/>
            </div>
            <div className="home__products">
            <Product id={4903850} title="Samsung Electronics LC49HG90DMNXZA CHG90 Series Curved 49-Inch Gaming Monitor" image="https://m.media-amazon.com/images/I/71thmuMkdAL._AC_SX522_.jpg" price={1452} rating={4}/>
            </div>
        </div>
    </div>
  )
}

export default Home