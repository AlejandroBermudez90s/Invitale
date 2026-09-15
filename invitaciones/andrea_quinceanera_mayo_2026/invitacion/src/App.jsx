import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Detalles from './componentes/Detalles/Detalles'
import Atrapado from './componentes/Atrapado/Atrapado'
import SeguirBajando from './componentes/SeguirBajando/SeguirBajando'
import Dinero from './componentes/Dinero/Dinero'
import Footer from './componentes/Footer/Footer'
import Audio from './componentes/Audio/Audio'
import TextoIntroduccion from './componentes/TextoIntroduccion/TextoIntroduccion'


function App() {
	return (
		<div className="container-fluid p-0 m-0 fondo">
			<Audio></Audio>
			<div className="cabecera">
				<Cabecera></Cabecera>
			</div>
			<div id="textoIntroduccion" className="textoIntroduccion">
				<TextoIntroduccion></TextoIntroduccion>
			</div>
			<div id="detalles" className="container-fuid">
				<Detalles></Detalles>
			</div>
			{/*
			<div className="container-fuid">
				<SeguirBajando></SeguirBajando>
			</div>
			<div id="atrapado" className="container-fuid">
				<Atrapado></Atrapado>
			</div>
			*/}
			<div id="dinero" className="container-fuid">
				<Dinero></Dinero>
			</div>
			<div className="container-fuid">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App
