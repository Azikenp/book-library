import React from 'react'
import loaderImg from '../../images/loader.svg'

function Loader() {
  return (
    <div className="loader flex flex-c">
      <img src={loaderImg} alt="loader" />
    </div>
  )
}

export default Loader