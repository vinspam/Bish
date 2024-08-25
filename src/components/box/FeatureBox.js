import React from 'react'

export const FeatureBox = ({ item }) => (
  <div className='featureBox'>
    <div className="itemCenter">
      <span className="featureIcon itemCenter">
        <img className='featureIconImg1' src={item.icon} alt={item.icon} />
      </span>
    </div>
    <p className="cardTitle">{item.title}</p>
  </div>
)