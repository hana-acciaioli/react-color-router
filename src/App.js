import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
