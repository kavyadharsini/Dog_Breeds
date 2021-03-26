import React, { Component} from 'react'
import SubBreedList from './SubBreedList'
import axios from 'axios'

class ShowEachBreedPhotos extends Component {

  state ={
      photo_list: []
  }

  //get selected breed url
  componentDidMount() {
    const breedPhotosURL = `https://dog.ceo/api/breed/${this.props.showBreed}/images`
      axios.get(breedPhotosURL)
        .then(res => {
          this.setState({
            photo_list: res.data.message
          })
        }
      )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props.showBreed) {
      axios.get(`https://dog.ceo/api/breed/${nextProps.showBreed}/images`)
        .then(res => {
          this.setState({
            photo_list: res.data.message
          })
        }
      )
    }      
  } 
  
  capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const currentBreed = this.props.currentBreed
    return(
      <div>
        <div className="show-breed-name gds-layout__container">
          <h1 className="show-breed-header gds-text--header-lg -m-b-3">
            {this.capitalizeFirstLetter(this.props.showBreed)}
          </h1>
        </div>
        <div>
          <SubBreedList subbreed={this.props.showBreed}
                        photo_list={this.state.photo_list}
                        currentBreed={currentBreed}
          />
        </div>
        <div className="-z-0">
          <div className="gds-flex-grid__container gds-layout__container">
            <div className="gds-flex-grid__row">
              {this.state.photo_list.map( (i, index) => (
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3" key={index}>
                  <div className="gds-card-no-bottom gds-card gds-flex-grid__item--full-height">
                    <div className="gds-card__img-container">
                      <img className="gds-card__img" src={i}  alt={this.props.showBreed}/>
                      <div className="gds-card__img-helper"></div>
                    </div>
                  </div>
                </div>   
              ))}                                
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowEachBreedPhotos