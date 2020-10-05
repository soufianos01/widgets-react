import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  });

  const renderedOptions = options.map(opt => {
    return opt.value === selected.value ? null :  
    (
      <div 
        className="item" 
        key={opt.value}
        onClick={() => {
          onSelectedChange(opt);
        }}
      >
        {opt.label}
      </div>
    )
  });


  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">
            {selected.label}
          </div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Dropdown;