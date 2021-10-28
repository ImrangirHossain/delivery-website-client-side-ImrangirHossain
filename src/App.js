import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Notfound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Header></Header>
        <Switch>
            <Route path='/home'>
                {/* <Home></Home> */}
            </Route>
            <Route exact path='/'>
                {/* <Home></Home> */}
            </Route>
            <Route path='/services'>
                {/* <Services></Services> */}
            </Route>
            <Route path='/about'>
              {/* <About></About> */}
            </Route>
            {/* <PrivateRoute path='/appointment'>
              <Contact></Contact>
            </PrivateRoute> */}
           
            <Route path='/login'>
              {/* <Login></Login> */}
            </Route>
            <Route path='*'>
                <Notfound></Notfound>
            </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </Router>
     
    </div>
  );
}

export default App;
