import React from 'react'
import axios from 'axios'

function Projects({title,Id}) {

  const handleDelete = ()=>{
    axios.delete(`http://localhost:5000/projects/${Id}`)
    .then(()=>
        console.log("Project is deleted")
    )
    .catch((err)=>{
        console.error(err)
    })
}
  return (
    <div className='project-cards'>
      <div>
        <img src='https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </div>
      <div>
        <p>{title}</p>
      <img onClick={()=>{
        handleDelete();
      }} className='delete' src='./delete.png'/>
      </div>
    </div>
  )
}

export default Projects
