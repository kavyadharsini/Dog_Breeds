import React, { Component } from 'react' 
import axios from 'axios'

class ShowSubBreedPhotos extends Component {

  state = {
    selectedBreedPhotoList: []
  }

  //get selected breed photolist
  componentDidMount() { 
    axios.get(`https://dog.ceo/api/breed/${this.props.getSelectedBreed}/images`)
      .then(res => {
        this.setState({
          selectedBreedPhotoList: res.data.message
        })
      })
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  goBack() {
    window.history.back()
  }

  render() {
    const { selectedBreedPhotoList } = this.state
    const  selectedSubBreed  =`${this.props.getSelectedBreed}-${this.props.showSubBreed}`
    //get filtered sub breed
    const filtered = selectedBreedPhotoList.filter(e =>
                     e.includes(selectedSubBreed))
  
    return(  
      <div>
        <div className="go-back-btn gds-flex gds-flex--align-center gds-layout__column--xs-offset-2 gds-flex gds-flex--direction-col gds-flex--align-center">
          <button type="button" 
                  className="gds-circular-button gds-circular-button--lg gds-circular-button--outline gds-circular-button--tooltip decorate decorate--all gds-flex__item gds-flex__item--grow-0" 
                  data-feedback="Outlined clicked" 
                  onClick={this.goBack.bind(this)}>
                 <p>go back</p>
          </button>
        </div>
        <div className="show-breed-name gds-layout__container">
          <h1 className="show-breed-header gds-text--header-lg -m-b-3">
            {this.capitalizeFirstLetter(this.props.getSelectedBreed)} 
          </h1>
        </div>
        <div>
          <h4 className="gds-text--body-md -m-b-6">
            <div className=" show-sub-breed-name">
              - {this.props.showSubBreed}
            </div>
          </h4>
        </div>
        
        <div className="-z-0">
          <div className="gds-flex-grid__container gds-layout__container">
            <div className="gds-flex-grid__row">
              {filtered.length > 0 ? filtered.map((photo, index) => (
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3" key={index}>
                    <div className="gds-card-no-bottom gds-card gds-flex-grid__item--full-height">
                         <div className="gds-card__img-container">
                            <img className="gds-card__img" src={photo}  alt={this.props.showSubBreed}/>
                            <div className="gds-card__img-helper"></div>
                          </div>
                    </div>
                </div>   
              )): 
                <div className="gds-loading">
                  <div className="gds-loading__dot"></div>
                </div>
              }                                
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowSubBreedPhotos