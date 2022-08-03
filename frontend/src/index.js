import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ContextProvider } from './context/ContextProvider.js'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextProvider> 
)