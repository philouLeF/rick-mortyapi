import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [data]);

  return (
    <>
      <header className='flex justify-center'>
        <img src="../src/assets/rickmortylogo.png" className='w-1/2' alt="" />
      </header>
      <main className='flex flex-wrap justify-center'>
      {data.map(function(data) {
        return (
          <Card key={data.id} name={data.name} gender={data.gender} img={data.image} origin={data.origin} location={data.location}/>
        )
      })}
      </main>
    </>
  )
}

export default App
