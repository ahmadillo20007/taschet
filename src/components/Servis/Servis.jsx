import React from 'react'
import './Servis.scss'
import i1 from '../../img/1.png'
import i2 from '../../img/2.png'
import i3 from '../../img/3.png'
import i4 from '../../img/4.png'
import i5 from '../../img/5.png'
import i6 from '../../img/6.png'
import i7 from '../../img/7.png'
import i8 from '../../img/8.png'
import i9 from '../../img/9.png'
import i10 from '../../img/10.png'
import i11 from '../../img/11.png'
import i12 from '../../img/12.png'
import i13 from '../../img/13.png'
import i14 from '../../img/14.png'
import i15 from '../../img/15.png'
function Servis() {
  return (
<>
<div className='servis'>
        <div className="container">
          <div className="servis__inner">
            <h1 className='servis__text'>Die Leistungen unseres Fachbetriebes</h1>
            <p className='servis__item'>Sehr günstige Lage der Autowerkstatt mit sehr guter <br /> Verkehrsanbindung in Gelsenkirchen Buer</p>
            <div className="serviss">
              <ul className="left">
<li className='left__item'> <img src={i1} alt="" /> <p className='servis__list__item'>Service Inspektionen an Ihren   Fahrzeug nach Herstellervorgaben  </p>  </li>
<li className='left__item'> <img src={i2} alt="" /> <p className='servis__list__item'>Auspuff</p> </li>
<li className='left__item'> <img src={i3} alt="" /> <p className='servis__list__item'>Schaltgetriebeinstandsetzung</p></li>
<li className='left__item'> <img src={i4} alt="" /> <p className='servis__list__item'>Autoglas</p></li>
<li className='left__item'> <img src={i5} alt="" /> <p className='servis__list__item'>computerdiagnose</p> </li>
              </ul>
              <ul className="center">
             
<li className='center__item'> <img src={i6} alt="" /> <p className='servis__list__item'>reifenservice</p></li>
<li className='center__item'>  <img src={i7} alt="" />  <p className='servis__list__item'>Karosseriearbeiten</p></li>
<li className='center__item'> <img src={i8} alt="" /> <p className='servis__list__item'>Einbau von Anhängerkupplung</p></li>
<li className='center__item'> <img src={i9} alt="" /> <p className='servis__list__item'>Lackierarbeiten</p></li>
<li className='center__item'> <img src={i10} alt="" /> <p className='servis__list__item'>Bremsen</p></li>
              </ul>
              <ul className="right">
        
<li className='right__item'><img src={i11} alt="" /> <p className='servis__list__item'>automatikgertriebspülung</p> </li>
<li className='right__item'><img src={i12} alt="" /> <p className='servis__list__item'>Schlüssel Programmierung</p></li>
<li className='right__item'><img src={i13} alt="" /> <p className='servis__list__item'>Kupplung</p></li>
<li className='right__item'><img src={i14} alt="" /> <p className='servis__list__item'>Klimaservice</p></li>
<li className='right__item'> <img src={i15} alt="" /> <p className='servis__list__item'>sowie Abgasuntersuchung (DEKRA Stützpunkt)</p></li>
              </ul>
            </div>
            <button className='servis__btn'>
           <i className='item'>
           Kontaktformular <i class="bi bi-envelope q"></i>
           </i>
            </button>

          </div>
        </div>
    </div>
        <div className="bg">
          
        </div></>
  )
}

export default Servis