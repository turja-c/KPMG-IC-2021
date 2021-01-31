import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import QuestionPage from './components/pages/QuestionPage';
import Dashboard from './components/pages/Dashboard';

const App = () => (
  <div className="App">
    <Router>
      <Switch> 
        <Route path='/HomePage'exact component={HomePage} />
        <Route path='/'exact component={HomePage} />
        <Route path='/QuestionPage' exact component={QuestionPage} />
        <Route path='/Dashboard' exact component={Dashboard} />
      </Switch>
    </Router>
  </div>
  
);

export default App;
