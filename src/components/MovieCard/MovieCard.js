import React from 'react';
import "./MovieCard.scss";
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { data } = props;
    return (
        <div className="card-item">
            <Link to={`/movie/${data.imdbID}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4>{data.Year}</h4>
                            <p>{data.Title}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;