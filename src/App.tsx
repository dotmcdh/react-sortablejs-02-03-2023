import "./styles.css";

import React from "react";
import { Sortable } from "./components/Sortable";
import { SortableNested } from "./components/SortableNested";

export default function App() {
  return (
    <>
      <Sortable />
      <div className="pt-3 pb-3 border-b-2 border-black" />
      <div className="pt-3" />
      <SortableNested />
    </>
  );
}
