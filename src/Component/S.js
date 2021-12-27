import T from "./T";
import React from "react";

export default function S({ obj }) {
  var data = "";
  for (const ele in obj.sHook) {
    data = obj.sHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <T obj={obj} />
    </>
  );
}
