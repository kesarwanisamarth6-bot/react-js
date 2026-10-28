import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    {/* yaha par app ko BrowserRouter se wrap kar diya hu */}
    {/* Ye browser ke URL ko observe karta hai aur React ko batata hai ki kaunsa component render karna hai. */}
   <App/>
   </BrowserRouter>
  
)
