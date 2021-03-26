import React from 'react'

const Intro = () => {
  return (
    <div id="intro" className="gds-layout__container gds-flex gds-flex--direction-col gds-flex--align-center">
      <div className="intro-img gds-image -m-b-2">
          <img src={`dog.png`} alt='intro'style={{width:"300px", heigh:"auto"}} />
      </div>
      <div>
        <p className="gds-text--body-md decorate decorate--all gds-flex__item gds-flex__item--grow-0">
          <span className="gds-text--bold">Dog breeds</span>  is the collection of dog breeds. Let select your favorite breed!!!!
        </p> 
      </div>
    </div>

  )
}
export default Intro