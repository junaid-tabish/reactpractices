import React, { useEffect,useState } from 'react'
import axios from 'axios'

export default function ApiCalling() {
  const [state,setState]=useState(0)
  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/posts").then(res=>console.log(res.data))
  },[])

  useEffect(()=>
  {
    console.log("call on every state update")
  })

  const handleOnClick=()=>
  {
    setState(state+1)
  }
  
 
  return (
    <>
    <h1>{state}</h1>
    <button onClick={handleOnClick}>click me</button>
    </>
  )
}


