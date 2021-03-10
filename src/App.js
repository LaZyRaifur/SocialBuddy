
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>


        </Route>
        <Route exac path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
