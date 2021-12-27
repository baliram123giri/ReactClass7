import React from "react";
import U from "./U";

export default function T({ obj }) {
  var data = "";
  for (const ele in obj.tHook) {
    data = obj.tHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <U obj={obj} />
    </>
  );
}
