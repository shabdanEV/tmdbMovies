import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import Slider from "react-slick";


const Trailers = ({movieId}) => {
    const [videos, setVideos] = useState([])
    const getVideos = async (id,key) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
        const {data} = await response
        setVideos(data.results)

    }
    useEffect(() => {
       getVideos(movieId,APIKEY)
    },[])
    console.log(videos)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div id="videos">
            <div className="container">
                <div className="videos">
                    <Slider {...settings}>
                        {
                            videos.map(el => (
                                <div key={el.id} >
                                    <iframe  width="1560" height="515" src={`https://www.youtube.com/embed/${el.key}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                </div>
                            ))
                        }
                    </Slider>


                </div>
            </div>
        </div>
    );
};

export default Trailers;

//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US