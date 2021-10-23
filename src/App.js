import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { CartProvider } from './context/CartContex';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <CartProvider>
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
            <Route exact path="/cart">
              <h1>Cart</h1>
            </Route>
            <Route path="*">
              <Redirect to="/"/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
      </>
  );
}

export default App;
