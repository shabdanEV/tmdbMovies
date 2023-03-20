import React, {useState,useEffect} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import './popular.scss'
import MovieCard from "../moviCard/MovieCard";

function Popular ({id}) {
    const [popular,setPopular] = useState([])
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        setPopular(data.results)
    }
    useEffect(()=> {
        getPopular(id)
    },[])


    return (
        <div id="popular">
            <div className="container">
                <div className="popular">

                    {
                        popular.map(el => (
                          <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Popular;