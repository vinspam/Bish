import React from 'react'

import './house.css'
import { Topbar } from '../../components/layouts/Header/Topbar'
import { Hero } from './Hero'
import { Features } from './Features'
import { JobTime } from './JobTime'

const House = () => (
  <div>
    <Topbar />
    <Hero />
    <Features />
    <JobTime />
  </div>
)

export default House