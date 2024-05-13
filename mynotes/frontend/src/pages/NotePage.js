import React, { useEffect, useState } from 'react'

import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NotePage = ({match,history}) => {
  
  let nodeId = match.params.id 
  let [note, setNote] = useState(null)
  
  useEffect(() => {
    getNote()
  },[nodeId])
  
  let getNote = async () => {

    if(nodeId === 'new') return

   let response = await fetch(`/api/notes/${nodeId}`)
   let data = await response.json()
   setNote(data)
  }

  let createNote = async () =>{
    fetch(`/api/notes/`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
  })
  }
 

  let UpdateNote = async () =>{
    fetch(`/api/notes/${nodeId}/`,{
      method:"PUT",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(note)
    })
  }
 
  let handleSubmit  = () => {
    if(nodeId !== 'new' && note.body.length===0){
      deleteNote()
    }

    else if(nodeId !== 'new'){
      UpdateNote()
    }
    else if(nodeId === 'new' && note!== null)
      createNote()

    history.push('/')
  }

  let deleteNote = async () =>{
    fetch(`/api/notes/${nodeId}/`,{
      method:"Delete",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(note)
    })
    history.push('/')
  }


  return (
    <div className='note'>
      <div className='note-header'>
        <h3> 
        <ArrowLeft onClick={handleSubmit}/>
        </h3>
        {nodeId !== 'new'?(
          <button onClick={deleteNote}>Delete</button>
        ): <button onClick={handleSubmit}>Done</button>} 
        
      </div>

      
      <div className='note-header'></div>
        <textarea onChange={(e) => {setNote({...note, 'body':e.target.value })}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage