import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
// lourity
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </BrowserRouter>,
)