import React, {useState} from 'react';

// class HooksCounter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counterValue: 0,
//     }
//   }
//
//   handleClick = (e) => {
//     const { counterValue } = this.state;
//     this.setState({counterValue: counterValue + 1})
//   }
//
//   render() {
//     const { counterValue } = this.state;
//     return (
//       <div>
//         <span>{counterValue}</span>
//         <button onClick={this.handleClick}>CLICK ME</button>
//       </div>
//     )
//   }
// }
function HooksCounter() {
  // const [ counterValue, setCounterValue] = useState(42)
  // if the above line looks strange, then try doing it without...
  //
  const myHook = useState(42);
  const myData = myHook[0];
  const myUpdaterFunction = myHook[1];

  const handleClick = (e) => {
    // setCounterValue(counterValue + 1)
    myUpdaterFunction(myData+1)
  }
  return (
    <div>
      <span>{myData}</span>
      <button onClick={handleClick}>click me for a hook increment</button>
    </div>
  )
}

export default HooksCounter;
