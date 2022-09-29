import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,horror,trending,documentaries,romance} from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Popular on Netflix'/>
      <RowPost url={trending} title='Trending Now' />
      <RowPost url={action} title='Action' />
      <RowPost url={horror} title='Horror' />
      <RowPost url={romance} title='Romance' />
      <RowPost url={documentaries} title='Documentaries' />
      
    </div>
  );
}

export default App;
