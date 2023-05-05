import React from 'react'
import './Servis.scss'
import img26 from '../../img/sobirjon.png'
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
<li className='left__item'> <img src={img26} alt="" /> Service Inspektionen an Ihren   Fahrzeug nach Herstellervorgaben    </li>
<li className='left__item'>Auspuff </li>
<li className='left__item'>Schaltgetriebeinstandsetzung</li>
<li className='left__item'>Autoglas</li>
<li className='left__item'>computerdiagnose </li>
              </ul>
              <ul className="center">
             
<li className='center__item'>reifenservice</li>
<li className='center__item'>  Karosseriearbeiten</li>
<li className='center__item'>Einbau von Anhängerkupplung</li>
<li className='center__item'>Lackierarbeiten</li>
<li className='center__item'>Bremsen</li>
              </ul>
              <ul className="right">
        
<li className='right__item'>automatikgertriebspülung </li>
<li className='right__item'>Schlüssel Programmierung</li>
<li className='right__item'>Kupplung</li>
<li className='right__item'>Klimaservice</li>
<li className='right__item'> sowie Abgasuntersuchung (DEKRA Stützpunkt)</li>Hauptuntersuchung
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