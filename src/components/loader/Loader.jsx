import React from 'react'
import loaderImg from '../../images/loader.svg'
import './Loader.css'

function Loader() {
  return (
    <div className="loader flex flex-c">
      <img src={loaderImg} alt="loader" />
    </div>
  )
}

export default Loader