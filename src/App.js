import React from 'react'
import Home from './Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './styles.css'

function App() {
  return (
    <div className="app">
        <NavBar />
        <Home />
        <Footer />
        {/* 
<Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<div> 404 Not Found</div>}></Route>
        </Routes>
       */}
   
    </div>
  )
}

export default App
