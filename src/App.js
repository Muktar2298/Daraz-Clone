import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
// --React Router Dom Import --//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
import LoginForm from "./components/Login/LoginForm";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({});

  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <div className="App">
        <Router>
          <p>email:{userLoggedIn.email}</p>
          <p>Password:{userLoggedIn.password}</p>
          <Header />
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route exact path="/review" component={Review} />
            <PrivateRoute exact path="/manage">
              <Inventory />
            </PrivateRoute>
            <Route
              exact
              path="/product/:productKey"
              component={ProductDetails}
            />
            <PrivateRoute path="/shipment">
              <Shipment />
            </PrivateRoute>
            <Route exact path="/login" component={Login} />
            <Route expat path="/loginform" component={LoginForm} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
