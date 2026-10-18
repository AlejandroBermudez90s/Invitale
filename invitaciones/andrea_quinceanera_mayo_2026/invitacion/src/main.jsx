import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
const appModule = import.meta.env.MODE === 'artistic'
  ? import('./v2/ArtisticApp.jsx')
  : import('./Legacy.jsx')

appModule.then(({ default: App }) => {
  createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
})
