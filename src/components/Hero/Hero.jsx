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
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>   <p className='header___item'>Erfahrene Mechaniker und Meister</p></li>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>   <p className='header___item'>Moderne Werkstattausrüstung</p></li>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>   <p className='header___item'>Breites Spektrum an Dienstleistungen (von A wie ABS bis Z wie Zylinderkopfdichtung, wir sind für Sie da!)</p></li>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i> <p className='header___item'> Erfahrene Mechaniker und Meister mit jahrzehntelange Erfahrung im KFZ Gewerbe</p></li>
            <li className='hero__list__item'> <i class="bi bi-gear redd"></i>  <p className='header___item'>Zuverlässiger und qualitativ hochwertiger Service, der dazu beiträgt, die Lebensdauer Ihres Autos zu verlängern</p></li>
          </ul>
          <button className='hero__btn'> <p className='item__text'>Kontaktformular</p><i class="bi bi-envelope icom"></i></button>
        </div>
      </div>
    </div>
        <div className="backround-img">
        
        </div></>
  )
}

export default Hero