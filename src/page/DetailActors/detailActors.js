import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './detailActors.scss'
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import ActorMovies from "./ActorMovies/ActorMovies";

const DetailActors = () => {
    const [detailCast, setDetailCast] = useState({})
    const [viewMore,setViewMore] = useState(300)
    const {castId} = useParams()
    const getDetailsActors = async (id,key) => {
        const resp = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
        const {data} = await resp
        setDetailCast(data)
    }
    const printBiography = (text) => {
        if(viewMore === 300) {
            setViewMore(text.length)
        } else {
            setViewMore(300)
        }
    }
    const {profile_path,biography,birthday,name,place_of_birth} = detailCast

    useEffect(()=> {
        getDetailsActors(castId,APIKEY)
    },[])


    return (

        <div id="detActors">
            <div className="container">
                <div className="detActors">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="detActors--titles">
                        <h1>{name} (<span>{birthday}</span>)</h1>
                        <h4>Biography</h4>
                        <p>{biography && biography.slice(0,viewMore)}

                        {biography && biography.length > 300 &&  <span
                            onClick={() => printBiography(biography)}
                            style={{color: "blue", cursor: 'pointer'}}>{viewMore === 300 ? 'читать дальше' : 'закрыть'}
                        </span>}
                    </p>
                    </div>


                </div>
            </div>
            <ActorMovies id={castId}/>
        </div>
    );
};

export default DetailActors;