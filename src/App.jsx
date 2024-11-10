import React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import "tachyons/css/tachyons.min.css";
import Nav from './Nav';

// App component
const App = () => {
  return (
    <div>
      <Nav />
      <h1>Made with ❤️ by Madhav !! </h1>
    </div>
  );
};
export default App; // Ensure you're using default export

// // Render the App component
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );