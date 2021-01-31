import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const App = () => (
  <div className="App">
    <Router>
      <Switch> 
        <Route path='/'exact component={HomePage} />
      </Switch>
    </Router>
  </div>
  
);

export default App;
