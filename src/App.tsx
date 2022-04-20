import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "lib";
import { routesDirectory } from "routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {routesDirectory.map((route, index) => (
          <Link to={route.path} key={index}>
            <button>{route.name}</button>
          </Link>
        ))}
        <Switch>
          {routesDirectory.map((route, index) => (
            <Route
              key={index}
              exact={route.exact ?? false}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
