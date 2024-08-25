import React from 'react'

export const FeatureBox2 = ({ item }) => (
  <div className='featureBox'>
    <div className="itemCenter">
      <span className="featureIcon itemCenter">
        <img className='featureIconImg2' src={item.icon} alt={item.icon} />
      </span>
    </div>
    <p className="cardTitle" style={{ fontWeight: '700' }}>{item.title}</p>
  </div>
)