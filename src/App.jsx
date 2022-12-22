import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './users.json'
import Card from './Card.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const color = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
]
  let random = Math.floor(Math.random() * users.length)
  let random1 = Math.floor(Math.random() * color.length)
  const [index, setIndex] = useState(random)
  const [colorv, setColorv] = useState(random1)
 
  const changeUser = () => {
    setIndex(random)
  }

  const changeColor = () => {
    setColorv(random) 
  }
  document.body.style = `background: ${color[colorv]}`;
  
  return (
    <div className="App">

      <div className="box">
        <h1 style={{color: color[colorv]}}>{users[index].quote}</h1>
        <h2 style={{color: color[colorv]}}>- {users[index].author}</h2>
        <button style={{cursor: 'pointer', backgroundColor: color[colorv]}} onClick={changeColor} >Click</button>
      </div>
    </div>
  )
}

export default App
