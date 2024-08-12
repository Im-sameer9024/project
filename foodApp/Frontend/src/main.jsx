
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreData from './Context/StoreContext.jsx'
import {Toaster} from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StoreData>
    <BrowserRouter>
    <Toaster/>
      <App />
    </BrowserRouter>
  </StoreData>
)
