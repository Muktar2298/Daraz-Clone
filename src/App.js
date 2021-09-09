import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
// --React Router Dom Import --//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/manage" component={Inventory} />
          <Route exact path="/product/:productKey" component={ProductDetails} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
