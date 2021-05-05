import React, { Component } from 'react';
import './PokeItem.scss';

class PokeItem extends Component {

  render() {
    const { Poke } = this.props;

    return (
      <li className="PokeItem">
        <h2>{Poke.name}</h2>

        <img
          src={Poke.url_image}
          alt={Poke.pokemon}
        />

      </li>
    );
  }

}

export default PokeItem;