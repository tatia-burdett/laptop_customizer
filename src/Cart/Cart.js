import React from 'react'
import Total from '../Total/Total'
import './Cart.css'
import Options from '../Options/Options'

class Cart extends React.Component {

  render() {
    return (
      <section className="main__summary"> 
        <h2>Your cart</h2>
        <Options 
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
        <Total 
          USCurrencyFormat={this.props.USCurrencyFormat}
          selected={this.props.selected}  
        />
      </section>
    )
  }
}

export default Cart