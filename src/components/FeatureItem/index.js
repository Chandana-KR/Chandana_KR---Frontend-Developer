import './index.css'

const FeatureItem = props => {
  const {feature} = props
  const {title, description, imageUrl} = feature
  return (
    <div className="feature-card">
      <div className="title-description-container">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <img src={imageUrl} alt="title" className="features-image" />
    </div>
  )
}

export default FeatureItem
