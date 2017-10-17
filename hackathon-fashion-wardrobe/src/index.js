import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers/reducer";
import BaseLayout from "./components/BaseLayOut.js";
import UserInfo from "./containers/UserInfo.js";
import LogOut from "./components/LogOut.js";
import Register from "./containers/Register.js";
import Login from "./containers/Login.js";
import Temp from "./components/TEMP.js";
import User_Dashboard from "./components/User_Dashboard.js";
import Wardrobe from "./components/Wardrobe";
import Item from "./components/Item";
import TodaysLook from "./components/TodaysLook";

const store = createStore(reducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={UserInfo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* temporary link to render logged-in components */}
            <Route path="/temp" component={Temp} />
            <Route path="/todayslook" component={TodaysLook} />
            <Route path="/Wardrobe" component={Wardrobe} />
            <Route path="/logout" component={LogOut} />
            <Route path="/User_Dashboard" component={User_Dashboard} />
            <Route path="/Item" component={Item} />
            <Route path="/TodaysLook" component={TodaysLook} />
          </Switch>
        </div>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
