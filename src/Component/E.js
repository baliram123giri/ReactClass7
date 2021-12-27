import React from "react";
import F from "./F";
export default function E({ obj }) {
  var data = "";
  for (const ele in obj.eHook) {
    data = obj.eHook[ele];
  }
  return (
    <React.Fragment>
      <h1>{data}</h1>
      <F obj={obj} />
    </React.Fragment>
  );
}
