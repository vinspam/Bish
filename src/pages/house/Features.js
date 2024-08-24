import React from "react"
import { Container } from "@mui/system"
import { book, locationWhite, sms } from "../../constant"
import { FeatureBox } from "../../components/box/FeatureBox"

const featuresInfo = [
  {
    icon: locationWhite,
    title: 'Enter your postcode to check BISH! codes are available where you live'
  },
  {
    icon: book,
    title: 'If BISH! codes are available then tell us your details'
  },
  {
    icon: sms,
    title: `We'll send your home's BISH by SMS`
  }
]

export const Features = () => (
  <div className="features" style={{ marginTop: '150px' }}>
    <Container>
      <p className="aboutTitle">How to get your home’s BISH! code</p>
      <div className="featureItems">
        {featuresInfo.map((item, index) => (
          <FeatureBox key={index} item={item} />
        ))}
      </div>
    </Container>
  </div>
)