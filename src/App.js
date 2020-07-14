import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "react-uuid";
import "./App.css";
import ListMovies from "./ListMovies";
import AddModal from "./AddModal";
import Search from "./Search";
import Rating from "./Rating";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: uuid(),
          name: "BatMan",
          image: "https://batman-on-film.com/wp-content/uploads/2019/10/2_EO-Batman-RP-JR-e1575916099713.png",
          rating: 5,
          year: "2012",
        },
        {
          id: uuid(),
          name: "Titanic",
          image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0061cb37-6042-4621-bc51-ca51c97e3060/d8fnf9h-8f128c4a-3647-463b-b80b-25a2582101f6.jpg/v1/fill/w_800,h_926,q_75,strp/titanic___movie_poster_by_zungam80_d8fnf9h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MjYiLCJwYXRoIjoiXC9mXC8wMDYxY2IzNy02MDQyLTQ2MjEtYmM1MS1jYTUxYzk3ZTMwNjBcL2Q4Zm5mOWgtOGYxMjhjNGEtMzY0Ny00NjNiLWI4MGItMjVhMjU4MjEwMWY2LmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.H6DuteEKhiIenVd_hXCrxx9Ryyy4ZyyAEMmSSYcnUw8",
          rating: 4,
          year: "1997",
        },
      ],
      rating: 1,
      keyword: "",
    };
  }
  addMovie = (movi) => {
    this.setState({ movies: this.state.movies.concat(movi) });
  };
  getKeyword = (word) => {
    this.setState({
      keyword: word,
    });
  };
  getRating = (rate) => {
    this.setState({
      rating: rate,
    });
  };
  render() {
    return (
      <div className="App_Movie">
        <Search search={(y) => this.getKeyword(y)} />
        <ListMovies
          movies={this.state.movies.filter(
            (el) => el.rating >= this.state.rating && el.name.toLocaleUpperCase().includes(this.state.keyword.toLocaleUpperCase().trim())
          )}
        />
        <Rating rating={(a) => this.getRating(a)} />
        <AddModal add={(x) => this.addMovie(x)} />
      </div>
    );
  }
}

export default App;
