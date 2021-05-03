import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.scss';


class PokeList extends Component {

  render() {
    const { Pokes } = this.props;

    return (
      <ul className="PokeList">
        {Pokes.map(Poke => (
          <PokeItem key={Poke._id} Poke={Poke} />
        ))}
      </ul>
    );
  }

}

export default PokeList;