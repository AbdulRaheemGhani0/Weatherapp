import { useState } from 'react'
import './App.css'
import deleteIcon from './icon.svg'



function App() {
  const [input, setInput] = useState("") 
  const [list, setList] = useState([]) 


  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleTask = () => {
setList([...list,input])
setInput("")}




const handleDelete = (i) => {
  const filterList = list.filter((elm)=> elm !== list[i])
console.log("filterList", filterList)
setList(filterList)
}



  
  return (
    
      <div className='App'>
        <h1>Todo App</h1>
        <div className="container">
          <div className="input-box">
<input type="text" value={input} onChange={(e)=>handleInput(e)} /><button onClick={handleTask} >Add Task</button> </div>
<div className="list"></div>
<ul>
{list.map((item, i)=> <li key={i} onClick={()=> handleDelete(i)} >{item}
</li>)}


</ul>



        </div>
        
        
        
        
        
        </div>
    
  )
}

export default App
