import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:id" component={Product}/>
      </Switch>
    </Router>
  );
}

export default App;
