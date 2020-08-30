import React from 'react'
import StarRating from './StarRating'

class SpiceItem extends React.Component {

  state = {
    like: false
  }

  handleLikeChange = () => {
    this.setState(prevState => {
      return {
        like: !prevState.like
      }
    })
  }

  render() {
    const { image, title, description, notes, rating } = this.props.spice
    return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <button className="favorite">
            <span role="img" aria-label="heart" onClick={this.handleLikeChange} >
              {/* TODO: find a way to toggle this value when the button is clicked!  */}
              { this.state.like ? "🤍" : "♡"}
            </span>
          </button>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Tasting Notes: <em>{notes}</em></p>
          <div>Rating: <StarRating percentage={rating / 5} /></div>
        </div>
      </div>
    )
  }
}

export default SpiceItem