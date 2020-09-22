import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: "What is React?",
    content: "React is a javascript library",
  },
  {
    title: "What do we use in React?",
    content: "we use components, props, and lifecycle methods",
  },
  {
    title: "How to create a react app?",
    content: "using create-react-app",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

export default () => {
  const [selected , setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label = "Select a color please"
          options = {options}
          selected = {selected}
          onSelectedChange = {setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
