import React from "react";
import R from "./R";

export default function Q({ obj }) {
  var data = "";
  for (const ele in obj.qHook) {
    data = obj.qHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <R obj={obj} />
    </>
  );
}
