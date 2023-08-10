'use client'
import React, { useEffect, useState } from 'react'

function Hydration({children}) {
    const [initRender, setinitRender] = useState(false);
    useEffect(()=>{
        setinitRender(true)
    },[])

  return (
    <>
        {initRender ?<div>{children}</div>:null }
    </>
    
  )
}

export default Hydration