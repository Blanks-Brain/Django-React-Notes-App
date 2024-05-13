import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

let getTitle = (note) => {
  let title = note.body.split('\n')[0]
  if(title.length > 45)
    {
      return title.slice(0,45)
    }

    return title
}

let getTime = (note) => {
  return new Date(note.updated_at).toLocaleDateString()
}

const ListItem = ({note}) => {
  return (
    <div>
        <Link to={`/note/${note.id}`}>
        <div className='notes-list-item'>
        <h3>{getTitle(note)}</h3>
        <p><span>{getTime(note)}</span></p>
        </div>
        </Link>
       
    </div>
  )
}

export default ListItem