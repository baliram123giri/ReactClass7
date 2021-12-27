import React,{useState} from "react";
import B from "./B";

export default function A() {
  const [b, setb] = useState("B Hook")
  const [c, setc] = useState("C Hook")
  const [d, setd] = useState("D Hook")
  const [e, sete] = useState("E Hook")
  const [f, setf] = useState("F Hook")
  const [g, setg] = useState("G Hook")
  const [h, seth] = useState("H Hook")
  const [i, seti] = useState("I Hook")
  const [j, setj] = useState("J Hook")
  const [k, setk] = useState("K Hook")
  const [l, setl] = useState("L Hook")
  const [m, setm] = useState("M Hook")
  const [n, setn] = useState("N Hook")
  const [o, seto] = useState("O Hook")
  const [p, setp] = useState("P Hook")
  const [q, setq] = useState("Q Hook")
  const [r, setr] = useState("R Hook")
  const [s, sets] = useState("S Hook")
  const [t, sett] = useState("T Hook")
  const [u, setu] = useState("U Hook")
  const [v, setv] = useState("V Hook")
  const [w, setw] = useState("W Hook")
  const [x, setx] = useState("X Hook")
  const [y, sety] = useState("Y Hook")
  const [z, setz] = useState("Z Hook")
  var obj ={ bHook:{b},
  cHook:{c},
  dHook:{d},
  eHook:{e},
  fHook:{f},
  gHook:{g},
  hHook:{h},
  iHook:{i},
  jHook:{j},
  kHook:{k},
  lHook:{l},
  mHook:{m},
  nHook:{n},
  oHook:{o},
  pHook:{p},
  qHook:{q},
  rHook:{r},
  sHook:{s},
  tHook:{t},
  uHook:{u},
  vHook:{v},
  wHook:{w},
  xHook:{x},
  yHook:{y},
  zHook:{z}}
  return (
    <>
      <h1>A Component</h1>
      <B obj={obj}/>
    </>
  );
}
