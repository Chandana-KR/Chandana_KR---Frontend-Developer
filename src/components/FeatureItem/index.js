import './index.css'

const FeatureItem = props => {
  const {feature} = props
  const {title, description} = feature
  return (
    <div className="feature-card">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  )
}

export default FeatureItem
