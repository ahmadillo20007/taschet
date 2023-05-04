import React from 'react'
import './Header.scss'
import logo from '../../img/logo.png'
function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <div className="left">
            <img src={logo} alt="" />
          </div>
          <div className="center">
            <ul className='header__list'>
              <li className='header__list__item'>Startseite</li>
              <li className='header__list__item'>Dienstleistungen</li>
              <li className='header__list__item'>Kontakt</li>
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
  )
}

export default Header