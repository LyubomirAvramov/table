import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import DataTable from './DataTable';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/table" component={DataTable} />
      </Switch>
    </Router>
  );
}

export default App;
