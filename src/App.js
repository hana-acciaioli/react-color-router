import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.js';
import Color from './components/Color/Color.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        {' '}
        Home 🏠
      </Route>
      <Switch>
        <Route path="/:redValue/:greenValue/:blueValue" component={Color} />
      </Switch>
    </div>
  );
}

export default App;
