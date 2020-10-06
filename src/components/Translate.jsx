import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = props => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  
  return (
    <div>
      <div className="form ui">
        <div className="field">
          <label>Enter Text</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown 
        label="Select a language"
        options={options} 
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      
      <Convert language={language} text={text} />
    </div>
  );
}

export default Translate;