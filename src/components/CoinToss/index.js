import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    head: 0,
    tail: 0,
  }

  TossingCoin = () => {
    const tossResult = Math.floor(Math.random() * 2) === 0
    this.setState(prevState => ({
      isHead: tossResult,
      head: tossResult ? prevState.head + 1 : prevState.head,
      tail: tossResult ? prevState.tail : prevState.tail + 1,
    }))
  }

  render() {
    const {isHead, head, tail} = this.state
    const total = head + tail
    return (
      <div className="card-container">
        <div className="card-white">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            src={
              isHead
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            alt="toss result"
            className="image-styling"
          />

          <button
            type="button"
            className="buttonStyling"
            onClick={this.TossingCoin}
          >
            Toss Coin
          </button>
          <div className="card">
            <p>Total: {total}</p>
            <p>Heads: {head}</p>
            <p>Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
