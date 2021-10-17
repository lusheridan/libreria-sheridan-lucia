import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
      <>
      <BrowserRouter>
      <NavBar/>
      <hr/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/detail/:productId">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer/>
        </Route>
        <Route exact path="/contacto">
          <h1>Contacto</h1>
        </Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
      </BrowserRouter>
      </>
  );
}

export default App;
