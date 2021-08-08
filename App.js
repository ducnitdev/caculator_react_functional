import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome';
import KeyBoard from './KeyBoard';
import React from 'react';

function App() {
  const [showStatements, setShowStatements] = React.useState(false);
  const [allStatements, setAllStatements] = React.useState();
  const [handleResult, setHandleResult] = React.useState('');
  const onClick = () => setShowStatements(true)

  /**
   * Expression
   * @param {*} fn 
   * @returns 
   */
  function evil(fn) {
    try {
      return new Function('return ' + fn)();
    } catch(err) {
      alert('Expression error');
    }
  }

  /**
   * Handle click keyBoard
   * @param {*} event 
   * @returns 
   */
  function onClickHandle(event) {
    var name = event.currentTarget.attributes['name'].value;
    var myarr = ["+-", "*", "/", "-", "+"];
    if (myarr.indexOf(name) > -1 && allStatements == undefined) {
      return;
    }
    if (allStatements != undefined) {
      name = allStatements + name;
    }
    setAllStatements(name);

  }

  /**
   * Handle result event
   */
  function handleResultEvent() {
    if (allStatements != undefined) {
      setHandleResult(evil(allStatements));
    }
  }


  /**
   * Handle clear text
   */
  function clearText() {
    setHandleResult("");
    setAllStatements("");
  }

  /**
   * Handle clear text before
   */
  function handleClearTextBefore() {
    var str = allStatements;
    if (str != '' && str != undefined) {
      str = str.substring(0, str.length - 1);
      setAllStatements(str);
    }
  }

  return (
    <div className="App">
      <div className="screenCaculator">
        <div>{allStatements}</div>
        <div>{handleResult}</div>
      </div>
      <div className="row">
        <KeyBoard name="C"  cssClass="keyBoard" onClick={clearText} />
        <KeyBoard name="+-" cssClass="keyBoard" onClick={handleClearTextBefore} />
        <KeyBoard name="%"  cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="/"  cssClass="keyBoard" onClick={onClickHandle} />
      </div>
      <div className="row">
        <KeyBoard name="7" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="8" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="9" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="*" cssClass="keyBoard" onClick={onClickHandle} />
      </div>
      <div className="row">
        <KeyBoard name="4" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="5" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="6" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="-" cssClass="keyBoard" onClick={onClickHandle} />
      </div>
      <div className="row">
        <KeyBoard name="1" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="2" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="3" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="+" cssClass="keyBoard" onClick={onClickHandle} />
      </div>
      <div className="row">
        <KeyBoard name="0" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="1" cssClass="keyBoard" onClick={onClickHandle} />
        <KeyBoard name="=" onClick={handleResultEvent} cssClass="keyBoardEqual" />
      </div>
    </div>
  );
}
export default App;
