import React, { Component } from 'react'
import Home from './home/home'
import Footar from './Footar/Footar'
import Resume from './Resume/Resume'
import Skills from './Skills/Skills'
export default class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Skills/>
        <Resume/>
        <Footar/>
       
        </div>
    )
  }
}
