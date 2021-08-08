function KeyBoard(props) {
    return <div name={props.name} className={props.cssClass} onClick={props.onClick}>{props.name}</div>;
  }
  
  export default KeyBoard;