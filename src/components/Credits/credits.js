import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import './credits.scss'
import Slider from "react-slick";


const Credits = ({movieId}) => {
    const [actors,setActors] = useState([])
    const getCredits = async (key,id) => {
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
        setActors(response.data.cast)
    }

    useEffect(() => {
        getCredits(APIKEY,movieId)
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3
    };
    console.log(actors)
    return (
       <div id="actors">
           <div className="container">
               {/*<div className="actors">*/}
                  <Slider {...settings}>
                      {
                          actors.map(el => (
                              <div className="actors--card">
                                  <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                                  <h4>{el.name}</h4>
                                  <p>{el.character}</p>
                              </div>
                          ))
                      }
                  </Slider>
               {/*</div>*/}
           </div>
       </div>
    );
};

export default Credits;