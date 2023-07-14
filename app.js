import React from react;

// MyButton.js

function MyButton({title}) {
  return (
    <button>{title}</button> 
  );
}

export default MyButton;

// App.js

import MyButton from './MyButton';

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      
      <MyButton title="Add to cart"/>
      
      <MyButton title="Find out more"/>
    </div>
  );
}

// MyButton now accepts a title prop
// Inside MyButton, we render title as the text of the button
// In App, we render MyButton twice, passing in a different title prop each time
// How props work:
// Props allow passing data from a parent component to a child component
// The child component receives the props as an object through the function parameters
// The child can then access the props to render dynamic data
// Difference between props and state:
// Props are passed from parent to child as a way to make components reusable
// State is internal data managed within a component and causes re-renders when changed
// Props are immutable in the child component, state can be changed
// Props make components reusable, state manages component internal data
// In a nutshell,, props allow customizing child components, while state manages the internal state to control rendering.



