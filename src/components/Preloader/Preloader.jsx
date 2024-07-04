import React, { useEffect } from 'react'
import {preLoaderAnim} from "../../animations/index"
import "./Preloader.css"

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
    <div className='preloader'>
      <div className="texts-container">
      <span>INFINITE</span>
      <span>MAGIC</span>
      <span>STORE</span>
      </div>
    </div>
  )
}

export default Preloader
