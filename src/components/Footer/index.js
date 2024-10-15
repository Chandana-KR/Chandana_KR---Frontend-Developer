import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div>
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dyify82t6/image/upload/v1728986826/Group_20_zpxoqw.png"
          alt="logo"
          className="footer-logo-image"
        />
        <h3 className="footer-logo-name">EhtAi</h3>
      </div>
      <div className="apps-container">
        <img
          src="https://res.cloudinary.com/dyify82t6/image/upload/v1729009693/telegram_ag9dtg.png"
          alt="Telegram"
        />
        <img
          src="https://res.cloudinary.com/dyify82t6/image/upload/v1729009686/instagram_wl5frw.png"
          alt="Instagram"
        />
        <img
          src="https://res.cloudinary.com/dyify82t6/image/upload/v1729009768/discord_szvery.png"
          alt="X"
        />
        <img
          src="https://res.cloudinary.com/dyify82t6/image/upload/v1729009673/Facebook_vh9rjg.png"
          alt="facebook"
        />
        <img
          src="https://res.cloudinary.com/dyify82t6/image/upload/v1729009662/discord_1_tpqjht.png"
          alt="discord"
        />
      </div>
    </div>

    <div className="footer-content-container">
      <h1 className="footer-heading">
        Designed for traders of today, just like you.
      </h1>
      <div className="footer-button-container">
        <button type="button" className="footer-button">
          Get Started
        </button>
      </div>
    </div>
  </div>
)

export default Footer
