import React from "react"

import { bg1, iphone, location, logoMenu } from "../../constant"
import { Container } from "@mui/system"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export const Hero = () => (
  <Container className='container' style={{ position: 'relative' }}>
    <Container>
      <img className="logoMenu" src={logoMenu} alt="logoMenu" />
    </Container>
    <div className="hero flexWrap">
      <div className="section">
        <Container>
          <div className="heroCard" style={{ background: '#F6F6F6' }}>
            <p className="bigTitle">Plumber prices are crazy. Your home’s BISH! code fixes that</p>
            <p className="subTitle" style={{ color: '#FB2A63' }}>We got fed up of crazy plumbing quotes and now we'e on a mission to save homeowners over £1 million on plumbing jobs and more. Get your home's BISH! code to join the challenge.</p>
          </div><br />
          <div className="heroCard">
            <span>Get your home’s 2024 BISH! code by SMS and save BIG on your next tradesperson</span> <br />
            <div className="postCode">
              <i><img src={location} alt='location' style={{ height: '20px' }} /> &nbsp;</i>
              <input placeholder="Enter your postcode to start" />
            </div>
          </div>
          <div className="heroCard" style={{ background: '#F6F6F6', marginTop: '20px' }}>
            <p className="subTitle" style={{ fontWeight: '700', textTransform: 'uppercase' }}>already got your home's bish! code?</p>
            <p style={{ fontSize: '16px', marginTop: '5px' }}>Great. you're ready to get your BISH! price for your next tradesperson job.</p>
            <Link to='./house'>
              <div style={{ textAlign: 'center' }}>
                <Button className="button" variant="contained" style={{ marginTop: '13px' }}>Get my BISH! Price</Button>
              </div>
            </Link>
          </div>
        </Container>
      </div>
      <div className="section iphoneSquare">
        <Container>
          <img className="bg1" src={bg1} alt="bg1" />
          <img className="iphone" src={iphone} alt="iphone" />
        </Container>
      </div>

    </div>
  </Container>
)