import React, { Component } from 'react';
import ApartmentByCity from './ApartmentByCity';

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

  render () 
{
  let apartment = this.state.apartment[0];
  let aptProps = {apartment}
  return (
    <React.Fragment>
     <div>
         {this.state.apartment.map((apartment, key) => {
               return (
                   <ApartmentByCity key={`apt-${key}`} apartment={...apartment} />
               );
           })
         }
         <ApartmentByCity apartment={apartment} />
         <ApartmentByCity {...aptProps} />
     </div>
  <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='45'
            placeholder='Barcelona'
            onChange={this.handleSearch.bind(this)}
            value={this.state.city} />
          <button
            type='search'
            onClick={this.handleGoClick.bind(this)}>
            <b> Search </b>
          </button>
        </form>
      </div>
      </React.Fragment>
    )
  }
}

export default SearchBar