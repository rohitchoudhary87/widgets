import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from './Convert';

const options = [
  {
    label: "Africaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text , setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text here</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label= 'Select a language please'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h4 className="ui header"> Output: </h4>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
