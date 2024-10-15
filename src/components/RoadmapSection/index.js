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
          className={`roadmap-item ${index % 2 === 0 ? 'reverse' : ''}`}
          key={each.id}
        >
          <div>
            <button type="button">{each.phase}</button>
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
  </div>
)

export default RoadmapSection
