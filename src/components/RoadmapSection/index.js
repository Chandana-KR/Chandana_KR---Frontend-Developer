import './index.css'

const roadmapDetails = [
  {
    id: 1,
    phase: 'PHASE 1',
    title: 'Kicking Off',
    order: 2,
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728986957/image_3_e5fqce.png',
    items: [
      {
        id: 'item1',
        content: 'Launch of EthAi: Officially',
      },
      {
        id: 'item1',
        content: 'Development of Core AI Agents',
      },
      {
        id: 'item1',
        content: 'User Onboarding Campaign',
      },
      {
        id: 'item1',
        content: 'Community Engagement Initiatives',
      },
    ],
  },
  {
    id: 2,
    phase: 'PHASE 2',
    title: 'Bigger Insights',
    order: 1,
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728986856/image_5_njxurr.png',
    items: [
      {
        id: 'item1',
        content: 'Introduction of Advanced AI Agents',
      },
      {
        id: 'item1',
        content: 'Strategic Partnerships',
      },
      {
        id: 'item1',
        content: 'User Interface Optimization',
      },
      {
        id: 'item1',
        content: 'Comprehensive Marketing Campaign',
      },
    ],
  },
  {
    id: 3,
    phase: 'PHASE 3',
    title: 'Full Power',
    order: 2,
    imageUrl:
      'https://res.cloudinary.com/dyify82t6/image/upload/v1728986839/Container_e9letq.png',
    items: [
      {
        id: 'item1',
        content: 'Introduction of Enhanced Features',
      },
      {
        id: 'item1',
        content: 'API Integration for Data Access',
      },
      {
        id: 'item1',
        content: 'Launch of Community-Driven Initiatives',
      },
      {
        id: 'item1',
        content: 'Continuous Improvement and Updates',
      },
    ],
  },
]

const RoadmapSection = () => (
  <div className="roadmap-section-container">
    <h1 className="roadmap-heading">Roadmap</h1>
    <div className="roadmap-content-container">
      {roadmapDetails.map((each, index) => (
        <div
          className={`roadmap-item ${index % 2 !== 0 ? 'reverse' : ''}`}
          key={each.id}
        >
          <div className="phase-title-item-container">
            <button type="button" className="phase-button">
              {each.phase}
            </button>
            <h3 className="roadmap-title">{each.title}</h3>
            <ul>
              {each.items.map(item => (
                <li className="road-item" key={item.id}>
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
          <img
            style={{order: each.order}}
            src={each.imageUrl}
            alt={each.title}
            className="roadmap-image"
          />
        </div>
      ))}
    </div>

    <div className="frequest-question-container">
      <h1 className="frequent-heading">Frequently Asked Questions</h1>
      <ul className="questions-container">
        <li className="question-item">
          <p className="question-mark">+</p>
          <p>What is EthAi?</p>
        </li>
        <li className="question-item">
          <p className="question-mark">+</p>
          <p>How can EthAi can help me as a Trader?</p>
        </li>
        <li className="question-item">
          <p className="question-mark">+</p>
          <p>Who can use EthAi?</p>
        </li>
        <li className="question-item">
          <p className="question-mark">+</p>
          <p>How does EthAi track smart money flow?</p>
        </li>
        <li className="question-item">
          <p className="question-mark">+</p>
          <p>How does ensure data security?</p>
        </li>
      </ul>
    </div>

    <div className="explore-container">
      <h1 className="explore-heading">Explore Our dApp</h1>
      <p className="explore-description">
        EthAi is an AI-powered dApp designed to help traders make smarter,
        data-driven decisions. By tracking smart money flows, monitoring key
        wallets, and providing real-time market insights, EthAi empowers users
        to stay ahead of trends. The platform offers intuitive AI features for
        asset recommendations, market analysis, and personalized crypto Q&A,
        making it the ultimate tool for both novice and experienced traders.
      </p>
      <button type="button" className="dApp-open-button">
        Open dApp
      </button>
    </div>
  </div>
)

export default RoadmapSection
