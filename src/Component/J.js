import K from "./K";

import React from "react";

export default function J({ obj }) {
  var data = "";
  for (const ele in obj.jHook) {
    data = obj.jHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
      <K obj={obj} />
    </>
  );
}
