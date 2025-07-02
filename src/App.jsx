import { useState } from 'react'
import Hero from './Hero'
import './App.css'
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
function App() {
 

  return (


  <>
  <header>
    <div className="container">
      <h2>G-shop</h2>
      <nav>

       <div className="input-wrapper">
        <input type="text" />
        <button>
          search
        </button>

       </div>
       <ul className='menu-devices'>
       <li>Display</li>
       <li>Headphones</li>
       <li>Mouse</li>
       <li>Keyboard</li>
       </ul>
       <ul className='userstatus'>
        <li><FaRegUser/></li>
        <li><FaRegHeart/></li>

        <li><FaScaleBalanced/></li>
       </ul>
      </nav>
    </div>
  </header>
  <Hero/>
  <main>
    <div className="container">
    <div className="category"></div>
    <div className="cards"></div>
    </div>
  </main>
  <section>
    <div className="container">

    </div>
  </section>

  </>
  )
}

export default App
