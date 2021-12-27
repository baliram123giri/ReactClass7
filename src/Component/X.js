import React from "react";
import Y from "./Y";

export default function X({ obj }) {
  var data = "";
  for (const ele in obj.xHook) {
    data = obj.xHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <Y obj={obj} />
    </>
  );
}
