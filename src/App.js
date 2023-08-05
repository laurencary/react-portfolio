import { Route, Switch, Redirect } from "react-router-dom";
import Software from './components/Software';
import Woodwork from "./components/Woodwork";


function App() {
  return (
    <Switch>
      <Route path="/">
        <Software />
      </Route>
      <Route path="/swe">
        <Software />
      </Route>
      <Route path='/woodworker'>
        <Woodwork />
      </Route>
      <Redirect to='/swe' />
    </Switch>
  );
}

export default App;
