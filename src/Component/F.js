import React from "react";
import G from "./G";

export default function F({obj}) {
  var data = "";
  for (const ele in obj.fHook) {
    data = obj.fHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <G obj={obj}/>
    </>
  );
}
