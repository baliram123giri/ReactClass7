
import Z from "./Z";
import React from 'react'

export default function Y({obj}) {
  var data = "";
  for (const ele in obj.yHook) {
    data = obj.yHook[ele];
  }
  return (
    <>
    <h1>{data}</h1>
    <Z obj={obj}/>
  </>
  )
}
