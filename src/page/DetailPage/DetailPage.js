import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './DetailPage.scss'
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import Credits from "../../components/Credits/credits";
import Trailers from "../../components/Trailers/trailers";

const DetailPage = () => {
    const {movieId} = useParams()
    const [detail,SetDetail] = useState({})
    const getDetail = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=en-US`)
        const {data} = await res
        SetDetail(data)

    }
    useEffect(() => {
      getDetail()
    },[])
    const {poster_path,title,runtime,release_date,backdrop_path,overview} = detail

    return (
       <>
           <div id="detail" style={{
               background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat center/cover`
           }}>
               <div className="container">
                   <div className="detail">
                       <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt=""/>
                       <div className="detail--titles">
                           <h1>{title}</h1>
                           <span>Release date:{release_date}</span>
                           <p>{Math.floor(runtime / 60)}<small>h</small> {runtime % 60} <small>min</small></p>

                           <p>{overview}</p>
                       </div>
                   </div>
               </div>
           </div>

           <Credits movieId={movieId}/>
           <Trailers movieId={movieId}/>
       </>

    );
};

export default DetailPage;