import { Route, Switch, Redirect } from "react-router-dom";
import Software from './components/Software';
import Woodwork from "./components/Woodwork";
import Human from "./components/Human";


function App() {
  return (
    <Switch>
      <Route path="/swe">
        <Software />
      </Route>
      <Route path='/woodworker'>
        <Woodwork />
      </Route>
      {/* <Route path='/human'>
        <Human />
      </Route> */}
      <Route path='/'>
        <Software />
      </Route>
      <Redirect to='/swe' />
    </Switch>
  );
}

export default App;
