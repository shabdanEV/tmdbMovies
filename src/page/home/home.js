import React, {useState,useEffect} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import './home.scss'
import MovieCard from "../moviCard/MovieCard";
function Home () {

    const [home,setHome] = useState([])
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=2`)
        const {data} = await url
        setHome(data.results)
    }
    useEffect(()=> {
        getPopular()
    },[])
    console.log(home)

    return (
        <div id="home">
            <div className="container">
                <div className="home">
                    <div className="home--child">
                        {
                            home.map(el => (<MovieCard el={el}/>))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default  Home;