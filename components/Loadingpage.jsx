import React from 'react'

function loading() {
  return (
    <div className='flex justify-center items-center'>
        <div className="lds-ripple flex justify-center items-center"><div></div><div></div></div>
    </div>
  )
}

export default loading