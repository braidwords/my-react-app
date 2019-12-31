import React, { Component } from 'react';

class SearchBar extends Component {

  constructor (props) {
    super(props)
    this.state = { city: '',
      apartment:[],
    };
  }

  handleSearch (e) {
    this.setState({ city: e.target.value })
  }

  handleGoClick () {
    fetch(`/apartment/city/${this.state.city}`)
      .then(response => response.json())
      .then(data=> this.setState({
        apartment: data
      }))
      
  };

  render () {
    return (
        <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='45'
            placeholder=' '
            onChange={this.handleSearch.bind(this)}
            value={this.state.city} />
          <button
            type='search'
            onClick={this.handleGoClick.bind(this)
} >
            <b> Search </b>
          </button>
        </form>
      </div>
    
    )
  }
}

export default SearchBar