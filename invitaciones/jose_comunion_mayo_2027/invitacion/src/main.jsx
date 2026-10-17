import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const artistic = import.meta.env.MODE === 'artistic'
if (!artistic) {
  await import('bootstrap/dist/css/bootstrap.min.css')
  await import('./index.css')
}
const { default: App } = artistic
  ? await import('./adventure/AdventureApp.jsx')
  : await import('./App.jsx')

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
