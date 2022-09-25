import logo from './logo.svg';
import './App.css';
import Home from './view/Home/Home';
import Kontakt from './view/Kontakt/Kontakt';
import MojeZadania from './view/MojeZadania/MojeZadania';
import NewPreson from './view/Form/NewPreson'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/tabela'>Tabela</Link></li>
            <li><Link to='/kontakt'>Kontakt</Link></li>
            <li><Link to='/111111111111'>New Prerson</Link></li>
          </ul>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>


        <Switch>
          <Route exact path='/kontakt' component={Kontakt}>
          </Route>

          <Route exact path='/tabela' component={MojeZadania}>
          </Route>
          <Route  exact path='/' component={Home}>
          </Route>
          <Route exact path='/111111111111' component={NewPreson}></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
