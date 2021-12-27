import React from "react";
import X from "./X";

export default function W({ obj }) {
  var data = "";
  for (const ele in obj.wHook) {
    data = obj.wHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <X obj={obj} />
    </>
  );
}
