import { useEffect, useState } from 'react'
import './App.css'
import DefsGlobales from './componentes/Ilustraciones/DefsGlobales'
import TexturaPapel from './componentes/Ilustraciones/TexturaPapel'
import SobreIntro from './componentes/SobreIntro/SobreIntro'
import Cabecera from './componentes/Cabecera/Cabecera'
import TextoIntroduccion from './componentes/TextoIntroduccion/TextoIntroduccion'
import LugarDestacado from './componentes/LugarDestacado/LugarDestacado'
import Detalles from './componentes/Detalles/Detalles'
import Regalo from './componentes/Regalo/Regalo'
import ConfirmarAsistencia from './componentes/ConfirmarAsistencia/ConfirmarAsistencia'
import Footer from './componentes/Footer/Footer'

function App() {
	const [sobreAbierto, setSobreAbierto] = useState(false)

	useEffect(() => {
		document.documentElement.style.overflow = sobreAbierto ? '' : 'hidden'
		return () => { document.documentElement.style.overflow = '' }
	}, [sobreAbierto])

	return (
		<div className="container-fluid p-0 m-0 fondo">
			<DefsGlobales />
			<TexturaPapel />
			{!sobreAbierto && <SobreIntro onAbrir={() => setSobreAbierto(true)} />}
			<div className="cabecera">
				<Cabecera></Cabecera>
			</div>
			<div id="textoIntroduccion" className="textoIntroduccion">
				<TextoIntroduccion></TextoIntroduccion>
			</div>
			<div id="lugar-destacado" className="container-fuid">
				<LugarDestacado></LugarDestacado>
			</div>
			<div id="detalles" className="container-fuid">
				<Detalles></Detalles>
			</div>
			<div className="container-fuid">
				<ConfirmarAsistencia></ConfirmarAsistencia>
			</div>
			<div id="regalo" className="container-fuid">
				<Regalo></Regalo>
			</div>
			<div className="container-fuid">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App
