import './index.css'

const ethAiItems = [
  {
    id: 1,
    title: 'Stay Ahead',
    description: 'No more guesswork—get clear, trustable insights.',
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728986917/graph_svzotu.png',
  },
  {
    id: 2,
    title: 'Know Your Assets',
    description: 'Always stay on top of how your investments are performing.',
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728986905/wallet_gmokc1.png',
  },
  {
    id: 3,
    title: 'Simply, Not Overwhelming',
    description:
      'Our tools are designed to make complex market analysis easy to understand and act on.',
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728986925/Vector_1_in4vpj.png',
  },
  {
    id: 4,
    title: 'Future-Proof',
    description:
      'We’re constantly improving, adding new features to help you make the most informed decisions possible.',
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728986889/Future_Technology_yeisv7.png',
  },
]

const AboutSection = () => (
  <div className="about-container">
    <h1 className="about-heading">About EthAi</h1>
    <p className="about-EthAi-description">
      At EthAi, we’re all about making crypto trading easier and more intuitive.
      We provide tools that help traders keep up with all new market trends,
      track top traders’ movements.
    </p>
    <button type="button" className="read-more-button">
      Read More
    </button>
    <div className="about-EthAi-container">
      {ethAiItems.map(eachItem => (
        <div className="about-cards">
          <img
            src={eachItem.imageUrl}
            alt={eachItem.title}
            className="about-images"
          />
          <h3 className="about-title">{eachItem.title}</h3>
          <p className="about-description">{eachItem.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default AboutSection
