import React from 'react'
import './footer.css'

function Footer() {
 
  return (
  <div className='footerMainPage'>
    <div className='footer-page'>
    <div className='aboutUs'>
    <h4 className='footheader1'> About Us</h4>
    <p className='footerParagraph'>Job Flight Kenya Project is an impact organization whose goal is</p>
    <p className='footerParagraph'>to drive transformative change for youth in Africa by</p>
    <p className='footerParagraph'>powering them with relavant technology capacity through</p>
    <p className='footerParagraph'>provision of quality and decentralized tech training</p>
    </div>
    <div className='company'>
    <h4 className='footheader'> Company</h4>
     <ol>
      <li>Home</li>
      <li>About</li>
      <li>Career</li>
      <li>Specialization</li>
     </ol>
    </div>
    <div className='social'>
    <h4 className='footheader'> Social</h4>
    <ol>
      <li>Twitter</li>
      <li>Facebook</li>
      <li>Instragram</li>
      <li>LinkedIn</li>
      <li>TikTok</li>
    </ol>
    </div>
    </div>
    <h4 className='footheader2'>Copyright 2023 by job flight interview All rights reserved</h4>
  </div>
  )
}

export default Footer
