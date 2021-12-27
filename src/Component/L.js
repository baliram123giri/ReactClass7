import React from "react";
import M from "./M";

export default function L({ obj }) {
  var data = "";
  for (const ele in obj.lHook) {
    data = obj.lHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <M obj={obj} />
    </>
  );
}
