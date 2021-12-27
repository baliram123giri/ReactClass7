import React from "react";
import H from "./H";

export default function G({ obj }) {
  var data = "";
  for (const ele in obj.gHook) {
    data = obj.gHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <H obj={obj} />
    </>
  );
}
