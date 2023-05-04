import React from 'react'
import './Hero.scss'
import img2 from '../../img/img2.png'
function Hero() {
  return (
<>
<div className='hero'>
      <div className="container">
        <div className="hero__inner">
          <h1 className='hero__text'>
          Ihre Autowerkstatt in Gelsenkirchen
          </h1>
          <ul className='hero__list'>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>   Erfahrene Mechaniker und Meister</li>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>   Moderne Werkstattausrüstung</li>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>   Breites Spektrum an Dienstleistungen (von A wie ABS bis Z wie Zylinderkopfdichtung, wir sind für Sie da!)</li>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>  Erfahrene Mechaniker und Meister mit jahrzehntelange Erfahrung im KFZ Gewerbe</li>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>  Zuverlässiger und qualitativ hochwertiger Service, der dazu beiträgt, die Lebensdauer Ihres Autos zu verlängern</li>
          </ul>
          <button className='hero__btn'><i className='btn__item'> <p className='item__text'>Kontaktformular</p><i class="bi bi-envelope  icon"></i></i></button>
        </div>
      </div>
    </div>
        <div className="backround-img">
        
        </div></>
  )
}

export default Hero