import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  renderSpices() {
    let filteredSpice = this.props.spices.filter(spice => {
      return this.state.fourStarOnly ? spice.notes.toLowerCase().includes(this.state.search.toLowerCase()) && spice.rating >= 4 : spice.notes.includes(this.state.search.toLowerCase())
    })
    return filteredSpice.map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }

  handleSearch = (evt) => {
    this.setState({
        search: evt.target.value
    })
  }

  handleStarsChange = () => {
    this.setState(prevState => {
      return {
      fourStarOnly: !prevState.fourStarOnly
      }
    })
  }

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input type="text" placeholder="Search By Tasting Notes..." onChange={this.handleSearch}/>
            </div>
            <label>
              4 Star Only <input type="checkbox" onChange={this.handleStarsChange} />
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList