import React from "react";
import L from "./L";

export default function K({ obj }) {
  var data = "";
  for (const ele in obj.kHook) {
    data = obj.kHook[ele];
  }
  return (
    <React.Fragment>
      <h1>{data}</h1>
      <L obj={obj} />
    </React.Fragment>
  );
}
