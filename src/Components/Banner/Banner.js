import React,{useEffect, useState} from 'react'
import {API_KEY,movieImage} from '../../Constants/Constant'
import './Banner.css'
import axios from '../../Axios';

function Banner() {
  
  const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0]);
    })
  
  }, [])
  
  return (

    <div 
    style={{backgroundImage:`url(${movie? movieImage+movie.backdrop_path:""})`}}
      className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.original_title:""}</h1>
            <h1 className='description' >{movie? movie.overview:""}</h1>
       
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            
            
             </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner