
import React from 'react'
import {ReactComponent as AddIcon} from '../assets/add.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
 
const AddButton = () => {
  return (
    <div>
       <Link to="/note/new" className="floating-button">
        <AddIcon/>
       </Link>
    </div>
  )
}

export default AddButton