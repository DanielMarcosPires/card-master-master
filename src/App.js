import { useState } from 'react';

import './color/style.scss'
import './App.css';

import Card from './Components/Card';
import JSONdata from './data.json'
function App() {

  let soma = 0

  for(let i of JSONdata){
    soma += i.score
  }
  
  
  console.log(soma);
  return (
    <div className="App">
      <Card total={parseInt(soma/4)}>
        {JSONdata.map(item =>{
          return(
            <li key={'oi'}  style={{background:item.corSecundario}} className='CardItem'>
              <div>
                <img src={item.icon} alt />
                <p style={{color:item.corPrimario}}>{item.category}</p>
              </div>
              <p>{item.score}<span>/100</span></p>
            </li>
          )
        })}
      </Card>
    </div>
  );
}

export default App;