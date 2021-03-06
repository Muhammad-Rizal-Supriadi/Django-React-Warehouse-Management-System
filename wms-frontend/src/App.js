import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage';
import ProductsPage from './Pages/ProductsPage';
import ShipmentsPage from './Pages/ShipmentsPage';
import LoginPage from './Pages/LoginPage';
import Customers from './Pages/Customers';
import CreateShipmentPage from './Pages/CreateShipmentPage';
import CreateProductPage from './Pages/CreateProductPage';
import CreateCustomerPage from './Pages/CreateCustomerPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path="/customers/new">
            <CreateCustomerPage/>
        </Route>

        <Route path='/customers' component={Customers}/>

        <Route path='/products/new'> 
          <CreateProductPage />
        </Route>

        <Route path='/products'>
              <ProductsPage/>
        </Route>

        <Route path='/shipments/new'> 
          <CreateShipmentPage/>
        </Route>

        <Route path='/shipments'>
          <ShipmentsPage/>
        </Route>


        <Route path='/login'>
          <LoginPage/>
        </Route>        

      </Switch>
    </Router>
  );
}

export default App;
