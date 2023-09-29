import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <Auth0Provider
          domain='dev-ssn1kk4cfrp6goba.us.auth0.com'
          clientId='1HT5mmOVB4diiA32EoULSkXKkt0mGC8F'
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
          >
                <App />
          </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
