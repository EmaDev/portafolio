import firebaseContext from './firebase/context';
import { CarouselProyectos } from "./components/CarouselProyectos";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/NavBar";
import { Seccion, SeccionCentrada, Titulo } from "./components/Seccion";
import { Actualidad } from "./components/subcomponents/Actualidad";
import { DeslizaPorMas } from "./components/subcomponents/DeslizaPorMas";
import { FormularioContacto } from "./components/subcomponents/FormularioContacto";
import { GridHabilidades } from "./components/subcomponents/GridHabilidades";
import './index.css';
import { MasHabilidades } from './components/subcomponents/MasHabilidades';

const colores = {
  bg1: 'backgroundPrimary',
  bg2: 'backgroundSecondary',
  col1: 'primary',
  col2: 'secondary'
}
function App() {
  return (

    <firebaseContext.Provider
      value={{
        id: 'emanuel cisterna'
      }}
    >
      <div className="container">
        <Navbar />
        <Header />
        {/*Seccion habilidades*/}
        <Seccion bgColor={colores.bg2} id="conocimientos">

          <Titulo textColor={colores.col1}>MIs conocimientos</Titulo>
          <GridHabilidades />
          <MasHabilidades/>
          <DeslizaPorMas color={colores.col1} />
        </Seccion>

        {/*Seccion proyectos*/}
        <Seccion bgColor={colores.bg1} id="proyectos">

          <Titulo textColor={colores.col2}>MIs Proyectos</Titulo>
          <CarouselProyectos />
          <DeslizaPorMas color={colores.col2} />
        </Seccion>

        {/*Seccion actualidad*/}
        <SeccionCentrada bgColor={colores.bg1} id="actualidad">
          <Actualidad />
          <DeslizaPorMas color={colores.col2} />
        </SeccionCentrada>

        {/*Seccion contacto*/}
        <Seccion bgColor={colores.bg1} id="contacto">

          <Titulo textColor={colores.col2}>Contacto</Titulo>
          <FormularioContacto />
        </Seccion>

        <Footer />
      </div>
    </firebaseContext.Provider>
  );
}

export default App;
