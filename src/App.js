import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './containers/ItemListContainer';
import './App.css';

function App() {
  return (
      <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenid@s a Librería Sheridan"/>
      </>
  );
}

export default App;
