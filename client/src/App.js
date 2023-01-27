import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import principalPage from "./Pages/PrincipalPage/PrincipalPage";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import CreateActivities from "./Pages/CreateActForm/CreateAct";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { pathname } = useLocation();
  return (
    <div className={`${pathname !== "/" && "Home"}`}>
      {pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={principalPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/countries/:id" component={Details} />
        <Route exact path="/createactivity" component={CreateActivities} />
      </Switch>
    </div>
  );
}

export default App;
