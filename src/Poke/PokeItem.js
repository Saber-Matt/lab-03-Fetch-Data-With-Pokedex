import React, { Component } from 'react';
import './PokeItem.scss';

class PokeItem extends Component {

  render() {
    const { Poke } = this.props;

    return (
      <li className="PokeItem">
        <h2>{Poke.name}</h2>

        <img
          src={Poke.image}
          alt={Poke.name}
        />

      </li>
    );
  }

}

export default PokeItem;