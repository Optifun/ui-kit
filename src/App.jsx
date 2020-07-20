import React, { useState } from "react";
// import { Button } from "./components";
import "@/styles/scss/index.scss";
import { Alert, Button, Input, RangeSlider, Select } from "./components";

const themes = ["primary", "positive", "warning", "negative"];

const drawSliders = (hideHint = false) => {
  const onChange = (value) => console.log(value);
  const calcValue = (min, max) =>
    Math.floor(min + Math.random() * (max - min + 1));
  let key = 0;
  return (
    <div style={{ width: "500px", display: "inline-block" }}>
      <RangeSlider
        key={0}
        value={calcValue(5, 25)}
        min={5}
        max={25}
        hideHint={hideHint}
        onChange={onChange}
      />
      {themes.map((theme) => (
        <RangeSlider
          key={key++}
          value={calcValue(5, 25)}
          theme={theme}
          min={5}
          max={25}
          hideHint={hideHint}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

const drawSelects = (size) => {
  const children = (
    <>
      <option>🍏Apple</option>
      <option>🍊Orange</option>
      <option>🍉Melon</option>
    </>
  );
  return (
    <>
      <Select size={size}>{children}</Select>
      <Select size={size} valid>
        {children}
      </Select>
      <Select size={size} invalid>
        {children}
      </Select>
    </>
  );
};

const drawInputs = (size) => {
  return (
    <>
      <Input placeHolder="Input" size={size} />
      <Input placeHolder="Valid Input" size={size} valid />
      <Input placeHolder="Invalid Input" size={size} invalid />
    </>
  );
};

const drawAlerts = (dismisible) => {
  const [state, setState] = useState([true, true, true, true]);
  let key = 0;
  const toggleOpen = (index) => {
    setState(state.map((st, id) => (id === index ? !st : st)));
  };

  return themes.map((theme, index) => {
    const dismiss = dismisible === true ? () => toggleOpen(index) : undefined;
    return (
      <Alert
        key={key++}
        open={state[index]}
        theme={theme}
        dismissible={dismiss}
      >
        This is alert <b>{theme}</b>
      </Alert>
    );
  });
};

const drawButtons = (
  size,
  squared = false,
  block = false,
  active = false,
  disabled = false
) => {
  let key = 0;
  const onClick = (theme) => window.alert(`${theme} ${size} clicked`);
  return (
    <>
      <Button
        onClick={() => onClick("")}
        size={size}
        squared={squared}
        block={block}
        active={active}
        disabled={disabled}
      >
        Normal
      </Button>
      {themes.map((theme) => (
        <Button
          key={key++}
          onClick={() => onClick(theme)}
          size={size}
          squared={squared}
          block={block}
          theme={theme}
          active={active}
          disabled={disabled}
        >
          {theme}
        </Button>
      ))}
    </>
  );
};

export default function App(props) {
  return (
    <div>
      <h1>React playground</h1>

      <div className="example">
        <h2>Alerts dismissible</h2>
        {drawAlerts(true)}
      </div>

      <div className="example">
        <h2>Slider</h2>
        {drawSliders()}
        {drawSliders(true)}
      </div>

      <div className="example">
        <h2>Inputs small</h2>
        {drawInputs("small")}
      </div>
      <div className="example">
        <h2>Inputs normall</h2>
        {drawInputs("normal")}
      </div>
      <div className="example">
        <h2>Inputs big</h2>
        {drawInputs("big")}
      </div>

      <div className="example">
        <h2>Selects small</h2>
        {drawSelects("small")}
      </div>
      <div className="example">
        <h2>Selects normall</h2>
        {drawSelects("normal")}
      </div>
      <div className="example">
        <h2>Selects big</h2>
        {drawSelects("big")}
      </div>

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
        <h2>Normal active buttons</h2>
        {drawButtons("big", false, false, true)}
      </div>
      <div className="example">
        <h2>Normal disabled buttons</h2>
        {drawButtons("big", false, false, false, true)}
      </div>

      <div className="example">
        <h2>Normal block buttons</h2>
        {drawButtons("normal", false, true)}
      </div>
    </div>
  );
}
