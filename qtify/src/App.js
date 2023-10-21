import { useEffect, useState } from 'react';
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/NavBar/Navbar';
import { featchTopAlbum,featchNewAlbum, featchSongs } from './api/api';
import Section from './Components/Section/Section';


function App() {
  const [topalbum, setTobalbum] = useState([]);
  const [newalbum, setNewalbum] = useState([]);
  const [songs, setSongs] = useState([]);

  const generateTobalbum = async () => {
    const data = await featchTopAlbum();
    setTobalbum(data);
  }
  const generateNewalbum = async () => {
    const data1 = await featchNewAlbum();
    setNewalbum(data1);
  }
  const generateSongs = async () => {
    const data2 = await featchSongs();
    setSongs(data2);
  }
  useEffect(()=>{
    generateTobalbum();
    generateNewalbum();
    generateSongs();
  },[])
  return (
    <div>
      <Navbar /> 
      <Hero /> 
      <Section data={topalbum} title="Top Albums" type="album" />
      <Section data={newalbum} title="New Albums" type="album" />
      <Section data={songs} title="Songs" type="songs" />    
    </div>
  );
}

export default App;
