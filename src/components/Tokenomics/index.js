import {PieChart, Pie, Cell, Tooltip} from 'recharts'

import './index.css'

const data = [
  {name: 'Liquidity Pool', value: 90},
  {name: 'Team', value: 35},
  {name: 'Marketing', value: 5},
]

const COLORS = ['#00d3e9', '#007a8e', '#1f78b4']

const Tokenomics = () => (
  <div className="tokenomics-container">
    <h1 className="tokeomics-heading">Tokenomics</h1>
    <div className="chart-info-container">
      <div className="pie-chart-container">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            innerRadius={90}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={5}
          >
            {data.map(entry => (
              <Cell
                key={entry.name}
                fill={COLORS[data.indexOf(entry) % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <div className="pie-chart-labels">
          {data.map(entry => (
            <div key={entry.name} className="label-item">
              <div
                className="color-box"
                style={{backgroundColor: COLORS[data.indexOf(entry)]}}
              >
                .
              </div>
              <span>
                {entry.name} ({entry.value}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="token-info">
        <h3>Token Information</h3>
        <p>
          <strong>Name</strong>: EthAi
        </p>
        <p>
          <strong>Token Name</strong>: $EthAi
        </p>
        <p>
          <strong>Token Standard</strong>: ERC20
        </p>
        <p>
          <strong>Blockchain</strong>: Ethereum
        </p>
        <p>
          <strong>Total Supply</strong>: 100 Million
        </p>
        <p>
          <strong>Tax</strong>: 5%/5%
        </p>
      </div>

      <div className="distribution-info">
        <h3>Distribution</h3>
        <p>
          <strong>Team</strong>: 35%
        </p>
        <p>
          <strong>Marketing</strong>: 5%
        </p>
        <p>
          <strong>Liquidity Pool</strong>: 90%
        </p>
      </div>
    </div>
  </div>
)

export default Tokenomics
