import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './css/index.css';

import App from './App';

const rootElement = document.getElementById('root') as Element;

ReactDOM.createRoot(rootElement).render(<App />);
