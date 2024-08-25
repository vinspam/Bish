import React from "react"

import { bg1, iphone, logoMenu } from "../../constant"
import { Container } from "@mui/system"

export const NewHero = () => (
  <Container className='container' style={{ position: 'relative' }}>
    <Container>
      <img className="logoMenu" src={logoMenu} alt="logoMenu" />
    </Container>
    <div className="hero flexWrap">
      <div className="section" style={{ color: '#272727' }}>
        <Container>
          <div className="heroCard" style={{ background: '#F6F6F6' }}>
            <p className="bigTitle">
              Fed up of high prices? <br />
              Don't fret. BISH! codes have arrived
            </p>
            <p className="subTitle">BISH! is on a mission to save homeowners over £1 million. Unlock your home’s BISH! code today and save BIG on plumbers, insurance and more</p>
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