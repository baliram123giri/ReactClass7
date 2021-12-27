
import S from "./S";
import React from 'react'

export default function R({obj}) {
  var data = "";
  for (const ele in obj.rHook) {
    data = obj.rHook[ele];
  }
  return (
    <>
    <h1>{data}</h1>
    <S obj={obj}/>
  </>
  )
}

