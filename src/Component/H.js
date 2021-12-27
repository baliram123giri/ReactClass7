import I from "./I";
import React from "react";

export default function H({ obj }) {
  var data = "";
  for (const ele in obj.hHook) {
    data = obj.hHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <I obj={obj} />
    </>
  );
}
