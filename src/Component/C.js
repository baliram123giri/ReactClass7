import React from "react";
import D from "./D";
export default function C({ obj }) {
  var data = "";
  for (const ele in obj.cHook) {
    data = obj.cHook[ele];
  }
  return (
    <React.Fragment>
      <h1>{data}</h1>
      <D obj={obj} />
    </React.Fragment>
  );
}
