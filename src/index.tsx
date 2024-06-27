import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import React from 'react';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createRoot } from 'react-dom/client';

// const rootElement = document.getElementById('root');
// if (!rootElement) {
//   throw new Error("Element with id 'root' not found in the document");
// }

// const root = createRoot(rootElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you're using reportWebVitals for performance monitoring
// reportWebVitals();
