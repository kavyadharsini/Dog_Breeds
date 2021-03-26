import React from 'react'

const Footer = () => {
  return(
    <div className="footer">
      <div className="gds-flex gds-flex--justify-start gds-layout__container">
        <div className="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-r-3 -m-t-1 -m-l-3">
          <img src={`dog_logo.png`} style={{width:"36px"}} alt="logo"/>          
        </div>
      </div>
      <div className="gds-flex gds-flex--direction-col gds-flex--justify-start gds-layout__container -m-t-2">
        <div className="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-l-3">
          <p className="gds-text--body-sm -m-b-2"><a href="https://dog.ceo/dog-api" target="_blank" rel="noopener noreferrer">Thanks to DOG CEO</a></p>
        </div>
      </div>
    </div>  
  )
}
export default Footer