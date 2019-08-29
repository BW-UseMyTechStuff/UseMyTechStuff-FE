import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from './components/registration/registration';
import Home from './components/pages/home';
import NavPage from './components/pages/NavPage';
import UserForm from './components/login/login';
// import ListItem from './components/pages/listItem';
import ListedItem from './components/pages/listedItem';
import EditItem from './components/pages/editItem';
// import EditForm from './components/pages/edit';
import MyItems from './components/pages/myItems';
import AddItem from './components/pages/addItem';
import ContactForm from './components/pages/ContactForm';
import RentItem from './components/pages/rentItem';
// import ItemPage from './components/pages/itemPage';
// import PrivateRoute from './utils/authRouter';
import './App.css' 

function App() {
  
  return (
    <div className="App">
      {/* <ItemPage /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={UserForm} />
        <Route path="/registration" component={Registration} />
        {/* <Route path='/list' component={ListItem} /> */}
        <Route path='/item' component={ListedItem} />
        <Route path='/myitems' component={MyItems} />
        <Route path='/items/:id/edit' component={EditItem} />
        <Route path='/add' component={AddItem} />
        <Route path='/contact' component={ContactForm} />
        <Route path='/rent' component={RentItem} />
        <Route path='/protected' component={NavPage} />
      </Switch>
    </div>
  );
}

export default App;