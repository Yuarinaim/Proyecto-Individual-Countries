import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import principalPage from "./Pages/PrincipalPage";
import Home from "./Pages/Home";
import Detail from "./Pages/Details";

function App() {
  const { pathname } = useLocation();
  return (
    <div className={`${pathname !== "/" && "Home"}`}>
      {/* {path !== "/" && <NavBar />} */}
      <Switch>
        <Route exact path="/" component={principalPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        {/* <Route exact path="/createactivity" component={CreateActivity} /> */}
      </Switch>
    </div>
  );
}

export default App;
