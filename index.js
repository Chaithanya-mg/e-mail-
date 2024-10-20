import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';  // Import the global CSS file, make sure it exists
import App from './App';  // Import the App component

// Render the App component to the 'root' div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure that index.html has <div id="root"></div>
);
