import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container">
          <Header />
          <div className="content-container">
            <h1 className="Innovation-heading">
              When Innovation meets{' '}
              <span className="span-style">Inventions</span>
            </h1>
            <p className="empowering-text">
              Empowering trading through advance technology
            </p>
            <button type="button" className="open-dApp-button">
              Open dApp
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Home
