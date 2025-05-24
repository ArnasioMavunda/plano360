import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Plano360react' // <- sem a extensão .jsx
import { BrowserRouter } from 'react-router-dom'
import './Css10.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
