import React from 'react'
import { Link } from 'react-router-dom'

import { bg2, checkRoundPink, iphone2 } from '../../constant'
import { Button, Container } from '@mui/material'

const checkInfo = [
  `Get your home's 2024 BISH! code to unlock a huge saving on plumbers and more`,
  `Use it once a year or upgrade for unlimited tradespeople bookings`,
  `Local and reliable tradespeople so you can book with confidence`
]

export const NewJobTime = () => (
  <Container className='container' style={{ position: 'relative' }}>
    <div className='hero flexWrap'>
      <div className="section iphoneSquare" style={{ width: '45%' }}>
        <Container>
          <img className="bg2" src={bg2} alt="bg2" />
          <img className="iphone" src={iphone2} alt="iphone" style={{ float: 'left' }} />
        </Container>
      </div>
      <div className="section itemCenter" style={{ width: '55%' }}>
        <Container>
          <div className="greyBox">
            <p className="bigTitle">Need a plumber? Stop the search. BISH! has arrived</p>
            <p className="subTitle" style={{ color: `var(--primary-bgColor)` }}>Join the $1 million savings challenge by using your home's BISH! code to save BIG on your next tradesperson.</p>
            <div>
              {checkInfo.map((title, index) => (
                <div key={index} className="alignCenter">
                  <img src={checkRoundPink} alt="checkRound" className="checkImg" />
                  <span className="checkBoxTitle">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Link to='/'>
            <Button className="button" variant="contained" style={{ margin: '40px 0 10px 0' }}>Get my BISH! Price</Button>
          </Link>
        </Container>
      </div>
    </div>
  </Container>
)