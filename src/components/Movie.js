import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends React.Component {
    state = {
        id: this.props.id,
        year: this.props.year,
        title: this.props.title,
        summary: this.props.summary,
        poster: this.props.poster,
        genres: this.props.genres
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="movie">
                <img src={this.state.poster} alt={this.state.title} title={this.state.title} />
                <div className="movie__data">
                    <h3 className="movie__title">{this.state.title}</h3>
                    <h5 className="movie__year">{this.state.year}</h5>
                    <p className="movie__summery">{this.state.summary.slice(0, 140)}...</p>
                    <ul className="genres">
                        {this.state.genres.map((genre, index) => {
                            return (
                                <li className="genres__genre" key={index}>
                                    {genre}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;