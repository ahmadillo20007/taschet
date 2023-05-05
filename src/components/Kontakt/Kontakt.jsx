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
          </div>
          <div className="right">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakt