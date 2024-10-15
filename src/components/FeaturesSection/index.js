import {Component} from 'react'

import FeatureItem from '../FeatureItem'

import './index.css'

const features = [
  {
    id: 1,
    title: 'Trade Optimizer',
    description:
      'Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.',
  },
  {
    id: 2,
    title: 'Market Insight',
    description:
      "Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.",
  },
  {
    id: 3,
    title: 'Risk Guard',
    description:
      'Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.',
  },
  {
    id: 4,
    title: 'Portfolio Sync',
    description:
      "Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.",
  },
  {
    id: 5,
    title: 'Opportunity Scout',
    description:
      'Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.',
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
