import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
const appModule = import.meta.env.MODE === 'marine'
  ? import('./marine/MarineApp.jsx')
  : Promise.all([import('./App.jsx'), import('./index.css'), import('bootstrap/dist/css/bootstrap.min.css')]).then(([app]) => app)

appModule.then(({ default: App }) => {
  createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
})
