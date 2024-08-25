import React from 'react'
import { bg2, iphone2 } from '../../constant'
import { JobBox } from '../../components/box/JobBox'
import { Container } from '@mui/system'

const jobTypeInfo = ['Easy to book', 'Local', 'Insured', 'Reliable', 'Experts']

export const JobTime = () => (
  <div>
    <Container className='container' style={{ position: 'relative', }}>
      <div className='hero flexWrap' style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0), rgba(214, 61, 102, 0.05)' }}>
        <div className="section iphoneSquare" style={{ width: '45%' }}>
          <Container>
            <img className="bg2" src={bg2} alt="bg2" />
            <img className="iphone" src={iphone2} alt="iphone" style={{ float: 'left' }} />
          </Container>
        </div>
        <div className="section itemCenter sectionMargin" style={{ width: '55%', }}>
          <Container>
            <div className='jobText'>
              <p className='title'>Experts to your door at your home’s exclusive  price for 2024. That’s BISH!</p>
              <p></p>
              <p className='subTitle subTitleMargin'>Use your home’s BISH! code to save<br /> money on all kinds of plumber jobs</p>
            </div>
          </Container>
        </div>
      </div>
      <div className='jobTypes' style={{ paddingTop: '10px' }}>
        <span className='title'>BISH! Tradespeople get the job done</span>
        <div className='flexWrap spaceAround'>
          {jobTypeInfo.map((name, index) => (
            <JobBox key={index} name={name} />
          ))}
        </div>
      </div>
    </Container>
    <div className='about' style={{ textAlign: 'center', marginTop: '30px' }}>
      <p className='title'>Need a tradesperson? Your home's BISH! code has got your back.</p>
      <p className='subTitle' style={{ margin: '0 10%' }}>The next time you need a tradesperson the first price you check should really be your home's 2024 BISH! price. Here's why.</p>
    </div>
  </div>
)