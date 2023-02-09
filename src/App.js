import { Fragment } from "react";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Homepage}/>
          <Route exact path="/About" component={AboutPage}/>
          <Route exact path="/Services" component={ServicePage}/>
          <Route exact path="/Contact" component={ContactPage}/>
          

        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
