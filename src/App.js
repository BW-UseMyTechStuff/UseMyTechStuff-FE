import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from './components/registration/registration';
import Home from './components/pages/home';
import NavPage from './components/pages/NavPage';
import UserForm from './components/login/login';
import ListedItem from './components/pages/listedItem';
import EditItem from './components/pages/editItem';
import MyItems from './components/pages/myItems';
import AddItem from './components/pages/addItem';
import ContactForm from './components/pages/ContactForm';
import RentItem from './components/pages/rentItem';
import PrivateRoute from './utils/authRouter';
import TvList from './components/pages/TvList.js';
import ComputerList from './components/pages/ComputerList.js';
import CameraList from './components/pages/CameraList.js';
import ApplianceList from './components/pages/ApplianceList.js';
import AudioList from './components/pages/AudioList.js';
import GadgetList from './components/pages/GadgetList.js';
import Inbox from './components/pages/Inbox.js'
import './App.css' 

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={UserForm} />
        <Route path="/registration" component={Registration} />
        <Route path='/item' component={ListedItem} />
        <Route path='/myitems' component={MyItems} />
        <Route path='/items/:id/edit' component={EditItem} />
        <Route path='/add' component={AddItem} />
        <Route path='/contact' component={ContactForm} />
        <Route path='/rent' component={RentItem} />
        <PrivateRoute path='/protected' component={NavPage} />
        <Route path="/tv" component={TvList} />
        <Route path="/computer" component={ComputerList} />
        <Route path="/camera" component={CameraList} />
        <Route path="/appliance" component={ApplianceList} />
        <Route path="/audio" component={AudioList} />
        <Route path='/inbox' component={Inbox} />
        <Route path="/gadget" component={GadgetList} />
      </Switch>
    </div>
  );
}

export default App;