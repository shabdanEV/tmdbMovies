import React from 'react';
import {Link} from 'react-router-dom'
const MovieCard = ({el}) => {
    return (
        <div id="movieCard">
            <div className="popular--child">
                <Link to={`/movies/movie/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img"/>
                </Link>
            </div>
        </div>

    );
};

export default MovieCard;