import React from "react";
import Q from "./Q";
export default function P({ obj }) {
  var data = "";
  for (const ele in obj.pHook) {
    data = obj.pHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <Q obj={obj} />
    </>
  );
}
