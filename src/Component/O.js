import React from "react";
import P from "./P";

export default function O({ obj }) {
  var data = "";
  for (const ele in obj.oHook) {
    data = obj.oHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <P obj={obj} />
    </>
  );
}
