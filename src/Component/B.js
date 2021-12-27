import React from 'react'
import C from "./C";

export default function B({obj}) {
  var data = '';  
  for (const ele in obj.bHook) {
    data = obj.bHook[ele]
    // console.log()
  }
  return (
    <>
    <h1>{data}</h1>
    <C obj={obj}/>
  </>
  )
}

