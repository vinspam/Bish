import React from 'react'
import { checkRound } from '../../constant'

export const JobBox = ({ name, index }) => (
  <div className={`${index === 0 && 'add'} jobBox`}>
    <div className='itemCenter jobIcon'>
      <img src={checkRound} alt={checkRound} />
    </div>
    <p className='cardTitle' style={{ margin: '5px' }}>{name}</p>
  </div>
)