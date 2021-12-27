import React from "react";
import E from "./E";

function D({ obj }) {
  var data = "";
  for (const ele in obj.dHook) {
    data = obj.dHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <E obj={obj} />
    </>
  );
}

export default D;
