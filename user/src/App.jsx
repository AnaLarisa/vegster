import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Success from "./pages/Success";
//import { useSelector } from "react-redux";

const App = () => {
    const user = true;//useSelector((state) => state.user.currentUser);
      return (
          <Router>
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>
                <Route path = "/recipes/:categories">
                    <RecipeList />
                </Route>
                <Route path = "/recipes/:id">
                    <RecipeList />
                </Route>
                <Route path = "/cart">
                    <Cart />
                </Route>
                <Route path="/success">
                    <Success />
                </Route>
                {/*<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
                <Route path="/register">
                    {user ? <Redirect to="/" /> : <Register />}
                </Route>*/}
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
          </Router>
      );
};

export default App;