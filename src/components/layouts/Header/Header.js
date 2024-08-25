import React from 'react'
import { Button, } from '@mui/material'

import { home, } from '../../../constant'
import './header.css'

const Header = () => (
    <div className="header alignCenter">
        <Button>
            <img src={home} alt='home' />
        </Button>
        <i className='headerTitle'>BISH!</i>
    </div>
)


export default Header