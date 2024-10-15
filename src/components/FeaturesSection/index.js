import {Component} from 'react'

import FeatureItem from '../FeatureItem'

import './index.css'

const features = [
  {
    id: 1,
    title: 'Trade Optimizer',
    description:
      'Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.',
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728989162/Rectangle_3_g1krav.png',
  },
  {
    id: 2,
    title: 'Market Insight',
    description:
      "Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.",
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728989154/7AVABZyyTAliootVGguafuelpHU.svg_hsnfb0.png',
  },
  {
    id: 3,
    title: 'Risk Guard',
    description:
      'Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.',
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728997258/l1NtBTj8px6kzRLIscIs56ETWRE.svg_sq5smf.png',
  },
  {
    id: 4,
    title: 'Portfolio Sync',
    description:
      "Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.",
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728989136/Group_ul3vqe.png',
  },
  {
    id: 5,
    title: 'Opportunity Scout',
    description:
      'Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.',
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728989129/OBJECTS_ra4hqv.png',
  },
]

class FeaturesSection extends Component {
  render() {
    return (
      <div className="features-container">
        <h1 className="features-heading">Our Features</h1>
        <div className="feature-item-container">
          {features.map(eachFeature => (
            <FeatureItem feature={eachFeature} key={eachFeature.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default FeaturesSection
