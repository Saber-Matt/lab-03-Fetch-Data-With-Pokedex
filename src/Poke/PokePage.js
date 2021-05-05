import { Component } from 'react';
import PokeList from './PokeList';
import Paging from '../common/Paging';
import Search from '../common/Search';
import Loading from '../common/Loading';
import request from 'superagent';
import './PokePage.scss';

const POKES_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

export default class PokePage extends Component {
  state = {
    Pokes: null,
    loading: false,
    search: '',
    page: 1
  }

  componentDidMount() {
    this.fetchPokes();
  }

  async fetchPokes() {
    const { search, page } = this.state;

    this.setState({ loading: true });

    try {
      const response = await request
        .get(POKES_API_URL)
        .query({ pokes: search })
        .query({ page: page });

      this.setState({ Pokes: response.body.results });
    }
    catch (err) {
      console.log(err);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  changePage(diff) {
    this.setState(
      { page: Math.max(this.state.page + diff, 1) },
      () => this.fetchPokes()
    );
  }

  handleSearch = ({ search }) => {
    this.setState(
      { search: search, page: 1 },
      () => this.fetchPokes()
    );
  }

  handlePrevPage = () => {
    this.changePage(-1);
  }

  handleNextPage = () => {
    this.changePage(1);
  }

  render() {
    const { pokes, loading, page } = this.state;

    return (
      <div className="PokePage">
        <section className="search-options">
          <Search onSearch={this.handleSearch} />
          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}
          />
        </section>

        <main>
          {pokes && (pokes.length
            ? <PokeList pokes={pokes} />
            : <p>Sorry no pokes :(</p>)
          }

          <Loading loading={loading} />

        </main>
      </div>
    );
  }

}