import React from 'react'

import './house.css'
import { NewHero } from './Hero'
import { NewFeatures } from './Features'
import { NewJobTime } from './JobTime'

const House = () => (
  <div>
    <NewHero />
    <NewFeatures />
    <NewJobTime />
  </div>
)

export default House