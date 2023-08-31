import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import * as bootstrap from 'bootstrap'
import Routercomponent from './Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
   <Routercomponent/>
  </React.StrictMode>,
)
