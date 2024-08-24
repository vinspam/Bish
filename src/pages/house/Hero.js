import React from "react"

import { bg1, iphone, logoMenu } from "../../constant"
import { Container } from "@mui/system"

export const Hero = () => (
  <Container>
    <div className="hero">
      <div className="section" style={{ color: '#272727', paddingBottom: '60px' }}>
        <img className="logoMenu" src={logoMenu} alt="logoMenu" />
        <p className="heroTitle">
          Fed up of high prices? <br />
          Don't fret. BISH! codes have arrived
        </p>
        <p className="aboutDescription">BISH! is on a mission to save homeowners over £1 million. Unlock your home’s BISH! code today and save BIG on plumbers, insurance and more</p>
      </div>
      <div className="section iphoneSquare">
        <img className="bg1" src={bg1} alt="bg1" />
        <img className="iphone" src={iphone} alt="iphone" />
      </div>
    </div>
  </Container>
)