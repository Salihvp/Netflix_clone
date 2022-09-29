import React,{useEffect,useState} from 'react'
import './RowPost.css';
import {movieImage} from '../../Constants/Constant'
import axios from '../../Axios';
// import YouTube from 'react-youtube';




function RowPost(props) {

const[movies,setMovies]=useState([])

useEffect(()=>{
  // axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
    axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results);
  })
},[])

// const opts = {
//   height: '390',
//   width: '640',
//   playerVars: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay: 0,
//   },
// };



  return (
    <div className='row'>
        <h2 className='poster_title'>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            
            
            <img className={props.isSmall ? 'smallPoster' :'poster'} src={`${movieImage+obj.backdrop_path}`} alt="poster" />
          )}
        </div>
            {/* <YouTube  videoId='uVrlq2tT90U' opts={opts}></YouTube> */}
            {/* <YouTube videoId="Ot3hr4JkDaA" opts={opts}  />; */}
    </div>
          )
}

export default RowPost