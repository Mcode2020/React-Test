import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [style, setStyle] = useState({
    display: "none"
  });
  const divRef = React.createRef<HTMLDivElement>();

  const handleKeyUp = (event: any) => {
    // Handle key up event here
    console.log('Key up event:', event.key, event, divRef.current?.innerText);
  };

  const handleKeyDown = (event: any) => {
    // Handle key down event here
    console.log('Key down event:', event.key);
  };

  return (
    <div className="App">
        
        <div className="container">
        <div className="payroll" contentEditable={true}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        ref={divRef}
        >
          <div className='payroll-tags'>
          <span className="tags-detail"><span className="inline-block whitespace-pre">Payroll Bonus COGS</span>       
          <span className="variable-tag-argument">[x]</span></span>
          </div>
          <div className='tag_links'><span>&</span></div>
          
          <div className='payroll-tags'>
          <span className="tags-detail"><span className="inline-block whitespace-pre">Payroll Bonus COGS</span>       
          <span className="variable-tag-argument">[x]</span></span>
          </div>
          <div className='payroll-tags'>
          <span className="tags-detail"><span className="inline-block whitespace-pre">Payroll Bonus COGS</span>       
          <span className="variable-tag-argument">[x]</span></span>
          </div>
          <div className='tag_links'><span>*</span></div>
          <div className='payroll-tags'>
          <span className="tags-detail"><span className="inline-block whitespace-pre">Payroll Bonus COGS</span>       
          <span className="variable-tag-argument">[x]</span></span>
          </div>

          <div className='tag-tooltip' style={style}>
            <ul>
              <li><div className='pay-bonus'>
                <div className='pay-bonus-text'><p>Payroll Bonus COGS</p></div>
                <div className='pay-currency'><p>currency</p></div></div>
                <div className='pay-dept'><p>Payroll bonus for COGS department</p></div>
              </li>
              <li><div className='pay-bonus'>
                <div className='pay-bonus-text'><p>Payroll Bonus COGS</p></div>
                <div className='pay-currency'><p>currency</p></div></div>
                <div className='pay-dept'><p>Payroll bonus for COGS department</p></div>
              </li>
              <li><div className='pay-bonus'>
                <div className='pay-bonus-text'><p>Payroll Bonus COGS</p></div>
                <div className='pay-currency'><p>currency</p></div></div>
                <div className='pay-dept'><p>Payroll bonus for COGS department</p></div>
              </li>
              <li><div className='pay-bonus'>
                <div className='pay-bonus-text'><p>Payroll Bonus COGS</p></div>
                <div className='pay-currency'><p>currency</p></div></div>
                <div className='pay-dept'><p>Payroll bonus for COGS department</p></div>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
