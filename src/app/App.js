import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokePage from '../villagers/VillagerPage';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <PokePage />
        <Footer />
      </div>
    );
  }

}

export default App;