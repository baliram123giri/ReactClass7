import React from "react";
import J from "./J";

export default function I({ obj }) {
  var data = "";
  for (const ele in obj.iHook) {
    data = obj.iHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <J obj={obj} />
    </>
  );
}
