// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './componant/About/About';
import Footer from './componant/Footer/Footer';
// import './App.css';
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Login from './componant/Login/Login';
import Ragister from './componant/Login/Ragister';
import Notfound from './componant/NotFound/Notfound';
import PrivateRoute from './componant/PrivateRoute/PrivateRoute';
import ServiceDetail from './componant/Services/ServiceDetail';
import Services from './componant/Services/Services';
import AuthProvider from './context/AuthProvider';
import Addmenu from './componant/AddMenu/Addmenu';
import Cart from './componant/Cart/Cart';
import MyOrder from './componant/MyOrder/MyOrder';
import ManageOrder from './componant/MyOrder/ManageOrder/ManageOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addmenu">
              <Addmenu></Addmenu>
            </Route>
            <Route path="/ragister">
              <Ragister></Ragister>
            </Route>

            <PrivateRoute path="/service/:serviceID">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder />
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrder />
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
