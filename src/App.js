import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Notfound from './Component/NotFound/NotFound';
import Contact from './Component/Contact/Contact';
import AuthProvider from './Context/AuthProvider';
import Home from './Component/Home/Home';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Services from './Component/Services/Services';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Order from './Component/Order/Order';
import ManageAllBooking from './Component/ManageAllBookings/ManageAllBooking';
import AddService from './Component/AddService/AddService';

function App() {
  return (
    <div className="App">
      <AuthProvider> 
      <Router>
        <Header></Header>
        <Switch>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/services'>
                <Services></Services>
            </Route>
            <Route path='/bookings'>
              <Order></Order>
            </Route>
            <Route path='/manageAllOrders'>
              <ManageAllBooking></ManageAllBooking>
            </Route>
            <Route path='/addServices'>
              <AddService></AddService>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path='/placeOrder/:serviceId'>
                <PlaceOrder></PlaceOrder>
            </PrivateRoute>
           
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
                <Notfound></Notfound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
