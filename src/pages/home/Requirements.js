import React from "react"
import { checkRoundPink } from "../../constant"

const cardInfo = [
  {
    title: 'Plumbers at cost ',
    text: `We don't profit from plumbers so you can save BIG on your next plumbing job.`,
  },
  {
    title: 'No mark ups on parts',
    text: `Yep, we don't mark up parts so you can save more.`,
  },
  {
    title: 'Experts only, naturally',
    text: `We only work with the best in your area so you're in safe hands`,
  },
]

export const Requirements = () => (
  <>
    <div className="requirements itemCenter flexWrap">
      <div>
        {cardInfo.map((item, index) => (
          <div key={index} className="requirementCard">
            <p className="title" style={{ marginLeft: '0', marginRight: '0' }}>{item.title}</p>
            <p className="cardTitle">{item.text}</p>
            <div className="requirementCardIcon itemCenter">
              <img src={checkRoundPink} alt={checkRoundPink} style={{ width: '35px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='about' style={{ textAlign: 'center' }}>
      <p className='bigTitle number' style={{ fontFamily: 'Inter' }}>Already got your home`s tradesperson BISH! code?</p>
      <p className='text' style={{ margin: '0 5%' }}>Call your local BISH! team now and tell us about the job and we`ll confirm your BISH! price.</p>
      <p className="bigTitle number">0800 367 3993</p>
    </div>
  </>
)