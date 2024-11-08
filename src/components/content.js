// Importing react 
import React from 'react';
// Arrow function 
const Content = () => {
  return (
    // Div to return hello world and the time when called 
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
// Ecporting content component so it can be used elsewhere 
export default Content;