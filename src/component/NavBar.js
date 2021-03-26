import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  state = {
      dropdown: []
  }

  componentDidMount() {
    this.setState({
        dropdown: false
    })
  }

  toggleDropDown(){
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const breedList = this.props.breedList
    const { dropdown } = this.state
    return(
      <div className="nav-bar -z-1">
        <div className="nav-container gds-layout__container">
          <div className="gds-flex">
            <Link to="/">
              <div id="dog-icon" className="gds-layout__column--xs-offset-1"><img src={`dog_logo.png`} alt="logo"/></div>
              <div className="gds-layout__column--xs-offset-2 -m-t-4 -m-l-5 -p-t-3 -p-l-3"></div>
            </Link>
          </div> 
          <div id="breed-dropdown-btn"
                data-gds-dropdown onClick={this.toggleDropDown.bind(this)}
                className={`gds-button-dropdown ${dropdown ? "gds-button-dropdown--active" : ""}`}>
            <button type="button" className="gds-button-dropdown__button gds-button--primary" data-gds-dropdown-button>
              Select The Breed Type 
            </button>
              <ul className="gds-button-dropdown__menu">
                {breedList.map( (breedList) => (
                  <Link to={`/breed/${breedList}`} key={breedList}>
                    <li className="gds-button-dropdown__menu-item"  
                        value={breedList}>{this.capitalizeFirstLetter(breedList)}
                    </li>
                  </Link>
                ))}
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar