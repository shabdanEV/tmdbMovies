import React, {useEffect, useState} from 'react';
import {APIKEY} from "../../ApiKey/APIKEY";
import axios from "axios";
import {useParams} from "react-router-dom";
import './search.scss'
import MovieCard from "../moviCard/MovieCard";

const Search = () => {
    const {movieName} = useParams()
    const [search, setSearch] = useState([])
    const getSearch = async (api,name) => {
        const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${name}`)
        const {data} = await url
        setSearch(data.results)
    }
    useEffect(() => {
        getSearch(APIKEY,movieName)
    }, [movieName])
    console.log(search)

    return (
        <div id="search">
            <div className="container">
                <div className="search">
                    <div className="search--name">
                        {

                            search.map(el => (
                                <MovieCard el={el}/>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;