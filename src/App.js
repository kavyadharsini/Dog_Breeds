import React, { Component } from 'react'
import NavBar from './component/NavBar'
import Intro from './component/Intro'
import Cards from './component/Cards'
import ShowEachBreedPhotos from './component/ShowEachBreedPhotos'
import ShowSubBreedPhotos from './component/ShowSubBreedPhotos'
import Footer from './component/Footer'

import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'

class App extends Component {
  state ={
    breedList: [],
    breedThumbs: [],
    currentBreed: []
  }

  //get all breeds list
  componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
      .then(res => {
        this.setState({
          breedList: Object.keys(res.data.message) 
        })
          if( window.location.pathname === '/'){
            this.getBreedThumb()
          }  
      })
  }

  //all breed's first photo
  getBreedThumb() {
    this.state.breedList.map((breedphoto) => (
      axios.get(`https://dog.ceo/api/breed/${breedphoto}/images`)
        .then(res => {
          this.setState({
            breedThumbs: [res.data.message[0], ...this.state.breedThumbs] 
          })
      })
    ))
  }

  render() {
    return (
      <div className="App">
        <NavBar breedList={this.state.breedList}/>
        <Route exact path="/" render={() =>{
          return(
            <div>
              <Intro />
              <Cards  breedList={this.state.breedList}
                      breedThumbs={this.state.breedThumbs}/>
            </div>
          )}} 
        />
        <Switch>
          {/* get subbreed url */}
          <Route path="/breed/:id/:sub" render={(r) => { 
            return(
              <ShowSubBreedPhotos showSubBreed={r.match.params.sub}
                                  getSelectedBreed={r.match.params.id}
              />
            )}}
          />
          {/* get breed url */}
          <Route path="/breed/:id" render={(route)=> { 
            return (
              <ShowEachBreedPhotos showBreed={route.match.params.id} 
                                    currentBreed={route.history.location.pathname}
              />                
            )}}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App
