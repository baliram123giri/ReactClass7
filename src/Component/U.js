import React from "react";
import V from "./V";

export default function U({ obj }) {
  var data = "";
  for (const ele in obj.uHook) {
    data = obj.uHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <V obj={obj} />
    </>
  );
}
