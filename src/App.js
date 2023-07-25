import { Route, Switch, Redirect } from "react-router-dom";
import Footer from './components/Contact';
import Menu from './components/Menu';
import Software from './components/Software';
import Header from './components/Header';
import MenuIcon from './components/MenuIcon';
import Woodwork from "./components/Woodwork";


function App() {
  return (
    <>
      <div id="wrapper">
        <MenuIcon />
        <Header />
        <div id="main">
          <div className="inner">
            <Switch>
              <Route path="/swe">
                <Software />
              </Route>
              <Route path='/woodworker'>
                <Woodwork />
              </Route>
              <Redirect to='/swe' />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
      <Menu />
    </>
  );
}

export default App;
