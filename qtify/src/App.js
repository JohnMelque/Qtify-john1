import { useEffect, useState } from 'react';
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/NavBar/Navbar';
import { featchTopAlbum } from './api/api';
import Card from './Components/Card/Card'


function App() {
  const [topalbum, setTobalbum] = useState([]);


  const generateTobalbum = async () => {
    const data = await featchTopAlbum();
    console.log(data);
    setTobalbum(data);
  }
  useEffect(()=>{
    generateTobalbum();

  },[])
  return (
    <div>
      <Navbar /> 
      <Hero /> 
      {
        topalbum.map((item) => {
        return (
          <Card data={item} type="album"/>
        )
      })}
    </div>
  );
}

export default App;
