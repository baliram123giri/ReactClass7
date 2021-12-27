import N from "./N";
import React from "react";

export default function M({ obj }) {
  var data = "";
  for (const ele in obj.mHook) {
    data = obj.mHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <N obj={obj} />
    </>
  );
}
