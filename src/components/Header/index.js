import {useState} from 'react'
import {FaGripLines} from 'react-icons/fa6'

import './index.css'

const Header = () => {
  const [ismenuClicked, toggleMenu] = useState(false)

  const onClickMenu = () => {
    toggleMenu(!ismenuClicked)
  }
  return (
    <>
      <div className="mobile-header-container">
        <img
          src="https://res.cloudinary.com/dyify82t6/image/upload/v1728986826/Group_20_zpxoqw.png"
          alt="logo"
          className="logo"
        />
        <button
          type="button"
          className="icon-button"
          aria-label="button"
          onClick={onClickMenu}
        >
          <FaGripLines className="menu-icon" />
        </button>
      </div>
      {ismenuClicked && (
        <ul className="nav-list-container">
          <li className="item">Features</li>
          <li className="item">Why Us</li>
          <li className="item">Tokenomics</li>
          <li className="item">Roadmap</li>
        </ul>
      )}

      <div className="larger-header-container">
        <ul className="large-nav-list-container">
          <li className="item">Features</li>
          <li className="item">Why Us</li>
          <li className="item">Tokenomics</li>
          <li className="item">Roadmap</li>
        </ul>
        <div className="button-container">
          <button type="button" className="login-button">
            Log in
          </button>
          <button type="button" className="whitespace-button">
            Whitespace
          </button>
        </div>
      </div>
    </>
  )
}
export default Header
