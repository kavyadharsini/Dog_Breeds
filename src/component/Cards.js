import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cards extends Component {

  capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
      const breedList= this.props.breedList
      const breedThumbs = this.props.breedThumbs.sort()
      return(
        <div>
          <div className="gds-flex-grid__container gds-layout__container">
            <div className="gds-flex-grid__row">
              {breedList.map((breedname, id) => (
                <div id={id} key={id} className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                  <Link to={`/breed/${breedname}`}>
                    <div className="gds-card gds-flex-grid__item--full-height">
                      <div className="gds-loading">
                        <div className="gds-loading__dot gds-loading__dot--sm"></div>
                      </div>
                      <div className="gds-card__img-container">
                        <img className="gds-card__img" src={breedThumbs[id]} alt={breedname}/>
                        <div className="gds-card__img-helper"></div>
                      </div>
                      <div className="gds-card__block">
                        <h2 className="gds-text--header-md gds-text--regular -inline-block">{this.capitalizeFirstLetter(breedname)}</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
  }
}

export default Cards