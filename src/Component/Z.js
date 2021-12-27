import React from "react";

export default function Z({obj}) {
  var data = "";
  for (const ele in obj.zHook) {
    data = obj.zHook[ele];
  }
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
