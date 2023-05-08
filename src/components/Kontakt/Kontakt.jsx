import React from 'react'
import './Kontakt.scss'
function Kontakt() {
  return (
    <div className='kontakt'>
      <div className="container">
        <div className="kontakt__inner">
          <div className="left">
            <h1 className='kontakt__text'>
              Kontakt
            </h1>
            <p className='kontakt__text__item'>
            Vertrauen Sie Ihr Auto den echten Profis an und erhalten Sie zuverlässigen und hochwertigen Service in unserer <br /> Autowerkstatt!
            </p>
      <div className="map">
      <div className="location">
  <div className="address">
  <h1>
       Adresse 
       </h1>
       <h2>
       Gelsenkirchen, Horsterstr 106 <br />
45897
       </h2>
  </div>
       {/* ________________________________________________ */}

       {/* ________________________________________________ */}

    <div className="tel">
    <h1>
       Telefon  
       </h1>
       <h2>
       0209/592696
       </h2>
    </div>
       {/* ________________________________________________ */}
       <div className="off">
 <h1>
       Öffnungszeiten
       </h1>
       <h2>
       Montag - Freitag <br />
8 bis 18 Uhr
       </h2>
 </div>
<div className="email">
<h1>
       E-Mail
       </h1>
       <h2>
       info@kfz-laschet.de
       </h2>
</div>
       {/* ________________________________________________ */}

            </div>
          <div className="right">
          <iframe className='ampp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.65546375971456!2d7.046766969023184!3d51.57214446690556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ef5928491d01%3A0x4ff564fb0be1aa8b!2zSG9yc3RlciBTdHIuIDEwNiwgNDU4OTcgR2Vsc2Vua2lyY2hlbiwg0JPQtdGA0LzQsNC90LjRjw!5e0!3m2!1sru!2s!4v1683545965537!5m2!1sru!2s" width="600" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakt