import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

export default function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <Carditem 
                    src="images/img-9.jpg"
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <Carditem 
                    src="images/img-2.jpg"
                    text='Have a tour to the islands of Bali in a Private Cruise'
                    label='Luxory'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <Carditem 
                    src="images/img-3.jpg"
                    text='Set sail to the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                    />
                    <Carditem 
                    src="images/img-4.jpg"
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/services'
                    />
                    <Carditem 
                    src="images/img-8.jpg"
                    text='Ride through the Sahara Deser on a guided camel tour'
                    label='Adrenaline'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}
