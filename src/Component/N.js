import O from "./O";
import React from "react";

export default function N({ obj }) {
  var data = "";
  for (const ele in obj.nHook) {
    data = obj.nHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <O obj={obj} />
    </>
  );
}
