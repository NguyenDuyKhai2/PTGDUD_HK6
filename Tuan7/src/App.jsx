import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <div className='container'>
        <Home></Home>
      </div>
      
      </Router>
     
    </>
  )
}

export default App
