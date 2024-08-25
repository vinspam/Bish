import { Container } from "@mui/system"
import React from "react"
import { CheckSquare } from "../../components/checkSquar/CheckSquar"


const checkInfo = [
  'Toilets, Sinks, Pipes and Drains', 'Hot Water Problems', 'Burst Pipes', 'Overflows', 'Floods', 'And more'
]

export const About = () => (
  <div className="about">
    <Container>
      <p className="title" style={{ fontFamily: 'Inter' }}>Use your BISH! Code on big jobs and small jobs</p>
      <p className="subTitle">Whether it’s a shower fix or big boiler job your home’s BISH! code will save your money.</p>
      <div className="flexWrapAround" style={{ paddingTop: '20px' }}>
        {checkInfo.map((name, index) => (
          <CheckSquare name={name} key={index} />
        ))}
      </div>
    </Container>
  </div>
)