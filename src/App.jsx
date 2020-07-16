import React from "react";
// import { Button } from "./components";
import "@/styles/scss/index.scss";
import Button from "./components/button";

const themes = ["primary", "positive", "warning", "negative"];

const drawButtons = (size, squared = false, block = false) => {
  let key = 0;
  const onClick = (theme) => window.alert(`${theme} ${size} clicked`);
  return themes.map((theme) => (
    <Button
      key={key++}
      onClick={() => onClick(theme)}
      size={size}
      squared={squared}
      block={block}
      theme={theme}
    >
      {theme}
    </Button>
  ));
};

export default function App(props) {
  return (
    <div>
      <h1>React playground</h1>
      <div className="example">
        <h2>Small buttons</h2>
        {drawButtons("small")}
      </div>
      <div className="example">
        <h2>Normal buttons</h2>
        {drawButtons("normal")}
      </div>
      <div className="example">
        <h2>Big buttons</h2>
        {drawButtons("big")}
      </div>
      <div className="example">
        <h2>Normal squared buttons</h2>
        {drawButtons("normal", true)}
      </div>
      <div className="example">
        <h2>Normal block buttons</h2>
        {drawButtons("normal", false, true)}
      </div>
    </div>
  );
}
