import React, {useState,useEffect} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import MovieCard from "../moviCard/MovieCard";

function TopRated ({id}) {
    const [topRated,setTopRated] = useState([])
    const getTopRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        setTopRated(data.results)
    }
    useEffect(()=> {
        getTopRated(id)
    },[])


    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        topRated.map(el => (<MovieCard el={el}/>))
                    }
                </div>
            </div>
        </div>

    )
}

export default TopRated;