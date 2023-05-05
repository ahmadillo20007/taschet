import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../img/logo.png'
import './Footer.scss'
function Footer() {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="Footer__inner">
                <p>
                Gelsenkirchen, Horsterstr 106 45897
                </p>
                <Link>
             <img src={img} alt="" />
             </Link>
                <p>
                Montag - Freitag 8 bis 18 Uhr
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer