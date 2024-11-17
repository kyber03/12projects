import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import {DataTable} from './assets/DataTable.jsx'
import {Comments} from './assets/Comments.jsx'
import Multifilters from './assets/Multifilters/Multifilters.jsx';
import EnhancedFilter from './assets/Products/EnhancedFilter.jsx';




function App() {
    

  return (
  
      <div>
         
         <EnhancedFilter/>
      </div>
   
 
  )
}

export default App
