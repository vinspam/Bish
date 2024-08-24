import React, { useEffect, useState } from 'react'
import './header.css'
// import { Container } from '@mui/system'
// import { mailIcon, phoneIcon } from '../../../constant'
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, } from 'react-icons/fa'

export const Topbar = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`${scrolled ? 'bgScrolled' : 'bgTransparent'} topbar`} >
      BISH! Technologies
      {/* <Container>
        <div className='spaceBetween'>
          <div className='alignCenter'>
            <span className='alignCenter'>
              <i><img src={phoneIcon} alt='phoneIcon' /> </i>
              &nbsp;0123456789 &nbsp;|&nbsp;&nbsp;
            </span>
            <span>
              <i><img src={mailIcon} alt='phoneIcon' /></i>
              &nbsp;bish01@gmail.com
            </span>
          </div>
          <div className={`${scrolled && 'scrolledColor'} socialIcon`}>
            <i><FaFacebookF /></i>
            <i><FaInstagram /></i>
            <i><FaLinkedinIn /></i>
            <i><FaYoutube /></i>
          </div>
        </div>
      </Container> */}
    </div >
  )
}