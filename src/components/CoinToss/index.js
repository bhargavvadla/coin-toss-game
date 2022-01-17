import './index.css'
import {Component} from 'react'

const HeadsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    tossImage: HeadsImageUrl,
  }

  onTossClick = () => {
    const {tailsCount, headsCount} = this.state
    const tossStatus = Math.floor(Math.random() * 2)
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount
    let updatedTossImage = ''

    if (!tossStatus) {
      updatedHeadsCount += 1
      updatedTossImage = HeadsImageUrl
    } else {
      updatedTailsCount += 1
      updatedTossImage = TailsImageUrl
    }
    this.setState({
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
      tossImage: updatedTossImage,
    })
  }

  render() {
    const {headsCount, tailsCount, tossImage} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <p className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="toss-image" />
          <button className="toss-btn" type="button" onClick={this.onTossClick}>
            Toss Coin
          </button>
          <p className="total-count">Total: {totalCount}</p>
          <p className="heads-count">Heads: {headsCount}</p>
          <p className="tails-count">Tails: {tailsCount}</p>
        </p>
      </div>
    )
  }
}

export default CoinToss
