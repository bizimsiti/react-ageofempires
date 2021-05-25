import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./Routes/routes";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} exact={route.exact} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
