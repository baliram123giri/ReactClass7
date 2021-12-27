import W from "./W";
import React from "react";

export default function V({ obj }) {
  var data = "";
  for (const ele in obj.vHook) {
    data = obj.vHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <W obj={obj} />
    </>
  );
}
