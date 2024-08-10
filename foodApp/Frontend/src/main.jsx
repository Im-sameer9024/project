
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreData from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StoreData>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreData>
)
