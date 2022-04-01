import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./components/user/User";
import NewUser from "./components/newUser/NewUser";
import Touter from "./components/touter/Touter";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";
import Feedback from "./components/feedback/feedback";
import NewProduct from "./components/newProduct/NewProduct";
import { Mail } from "@material-ui/icons";
import Login from './components/login/Login';
function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Switch>

        <Route exact path="/login">
            <Login/>
          </Route>
        
          <Route path="/home">
            <Home/>
          </Route>
        
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Route path="/touter">
            <ProductList />
          </Route>
          <Route path="/product/:userId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <Touter/>
          </Route>

          <Route path="/feedback">
            <Feedback/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
