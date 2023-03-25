import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
const ActorMovies = ({id}) => {
    const [movies, setMovies] = useState([])
    const getActorMovies = async (id,key) => {
        const response =await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
         const {data} = await response
        setMovies(data.cast)
    }
    useEffect(() => {
        getActorMovies(id,APIKEY)
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3
    };
    console.log(movies)
    return (
        <div className="container">
            <Slider {...settings}>
                {
                    movies.map(movie => (
                        <div>
                            <Link to={`/movies/movie/${movie.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} width={140} alt=""/>

                            </Link>
                        </div>
                    ))
                }
            </Slider>


            
        </div>
    );
};

export default ActorMovies;
