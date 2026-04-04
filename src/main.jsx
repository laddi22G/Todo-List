import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './components/TodoList/Context.jsx'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
  root.render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>
);
