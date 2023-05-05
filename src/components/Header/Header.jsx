import React from 'react'
import './Header.scss'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <div className="top">

      </div>
      <header>
        <div className="container">
          <div className="header__inner">
            <div className="left">
              <Link to={'/'}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="center">
              <ul className='header__list'>
                <Link>
                  <li className='header__list__item'>Startseite</li>

                </Link>

                <Link>
                  <li className='header__list__item'>Dienstleistungen</li>
                </Link>
                <Link>
                  <li className='header__list__item'>Kontakt</li>
                </Link>
              </ul>
            </div>
            <div className="right">
              <button className='header__btn'> <i className='btn__item'>Kontaktformular</i></button>
            </div>
          </div>
        </div>
        <div className="black">

        </div>
        <div className="red">

        </div>
      </header>

    </>
  )
}

export default Header