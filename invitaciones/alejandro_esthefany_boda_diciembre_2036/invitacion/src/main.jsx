import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Entradas separadas: la v2 no carga los estilos ni componentes de la original.
const appModule = import.meta.env.MODE === 'artistic'
	? import('./v2/ArtisticApp.jsx')
	: import('./App.jsx')

appModule.then(module => {
	const App = module.default
	createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
})
