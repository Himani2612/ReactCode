import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import Profile1 from "./component/pages/Profile1";
import Navbar from "./component/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./component/pages/NotFound";

import AddProfile from "./component/profiles/AddProfile";
import EditProfile from "./component/profiles/EditProfile";
import Profile from "./component/profiles/Profile";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/profile1" component={Profile1} />
          <Route exact path="/profiles/add" component={AddProfile} />
          <Route exact path="/profiles/edit/:id" component={EditProfile} />
          <Route exact path="/profiles/:id" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;