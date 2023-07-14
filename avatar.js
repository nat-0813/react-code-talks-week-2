import React from react;

function Avatar({name, imageUrl, imageSize}) {
    return (
      <div>
        <img 
          src={imageUrl}
          alt={name}
          style={{width: imageSize, height: imageSize}} 
        />
        <p>{name}</p>
      </div>
    );
  }
  
  export default Avatar;
  
  // App.js
  
  import Avatar from './Avatar';
  
  export default function App() {
    return (
      <Avatar 
        name={user.name}
        imageUrl={user.imageUrl}
        imageSize={user.imageSize}
      />
    ); 
  }
  
//   The Avatar component accepts the user props and uses them to render the image and name.
// Inside the Avatar component, I use curly braces {name} , {imageUrl} , and {imageSize} to insert the actual prop values.
// This allows the Avatar to be reusable for any user data passed in. The curly brace syntax dynamically inserts the JavaScript values into the JSX.


  