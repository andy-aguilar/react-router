import './App.css';
import Root from "./Root"
import SignIn from "./SignIn"
import About from "./About"

import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>HI</header>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Root />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
