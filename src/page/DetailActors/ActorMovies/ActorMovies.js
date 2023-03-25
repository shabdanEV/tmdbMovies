import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";

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
    console.log(movies)
    return (
        <div className="container">
            {
              movies.map(movie => (
                  <div>
                      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} width={100} alt=""/>
                  </div>
              ))
            }
            
        </div>
    );
};

export default ActorMovies;
