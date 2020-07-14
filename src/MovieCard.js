import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
class MovieCard extends Component {
  render() {
    return (<div className="card_movie">
    
        <div className="card_parte_1">
          <h3 className="name_movie">{this.props.movie.name}</h3>
          <h3 className="year_movie">{this.props.movie.year}</h3>
        </div>
        <img className="image_movie" src={this.props.movie.image} />
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.props.movie.rating}/>
      
       
      </div>
     
    );
  }
}

export default MovieCard;
