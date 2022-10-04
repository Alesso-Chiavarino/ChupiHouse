import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

const App = () => {

  const opciones = [{
    categoria: "Inicio",
    ruta: "/"
  },
  {
    categoria: "Productos",
    ruta: "/produs"
  },
  {
    categoria: "Contacto",
    ruta: "/contacto"
  }
  ]




  return (
    <div className="App">
      <NavBar opciones = {opciones} />
      <ItemListContainer/>
    </div>
  );
}

export default App;