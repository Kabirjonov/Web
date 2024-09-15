import React from 'react'
import Nav from '../Nav/Nav'
import './App.css'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import './madia.css'


const App = ()=> {
 
  return (
    <div className='App'>
      <Nav />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
} 
export default App