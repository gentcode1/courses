import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom'

const title= "";
const images=[]
for (let animal in animals){
  images.push(<img 
  key={animal}
  alt= {animal}
  className="animal"
  ariaLabel={animal}
  role="button"
  src={animals[animal].image}
  onClick= {displayFact}
  />)
}

const displayFact=(e)=>{
  const selectedAnimal= e.target.alt
  const animalInfo= animals[selectedAnimal]
const index=Math.floor(Math.random() *animalInfo.facts.length)

const funFact= animalInfo.facts[index]
document.getElementById('fact').innerHTML= funFact

}
const showBackground= true
const background= <img class="background" alt="ocean" src='/images/ocean.jpg'/>
const animalFacts= (<div>

<h1>{title === "" ? 'Click an animal for a fun fact' : title}</h1>
{showBackground && background}
<p id="fact"></p>
<div className='animals'>{images}</div>
</div>)



ReactDOM.render(
  animalFacts,
  
  document.getElementById('root')
)