import './App.css';
import Informacion from './components/informacion';

function App() {
  return (
    <div className="App">

      <h1>Perfil de información - Taller 3 - DPS</h1>
      <div className='contenedor-principal'>
      
        <Informacion 
          nombre='Rodrigo Fernando Valle Díaz'
          carrera='Ingeniería en Ciencias de la Computación'
          habilidades ='Para el lado del frontend poseo habilidades en HTML5,
          CSS3, JavaScript, Bootstrap y React JS (básico) y para el backend mySQL, SQL Server, 
          PHP 8 y Laravel 9.'
          imagen='foto'
          />

      </div>
    </div>
  );
}

export default App;
