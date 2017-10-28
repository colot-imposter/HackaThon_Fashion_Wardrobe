import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Router, BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers/reducer";
import BaseLayout from "./components/BaseLayOut.js";
import UserInfo from "./containers/UserInfo.js";
import LogOut from "./components/LogOut.js";
import Register from "./containers/Register.js";
import Login from "./containers/Login.js";
import User_Dashboard from "./components/User_Dashboard.js";
import Wardrobe from "./components/Wardrobe";
import newItem from "./components/newItem";
import TodaysLook from "./components/TodaysLook";
import Weather from "./components/weather";

// update component to post to heroku
import Update from "./containers/update";

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

            <Route path="/todayslook" component={TodaysLook} />
            <Route path="/Wardrobe" component={Wardrobe} />
            <Route path="/weather" component={Weather} />
            <Route path="/logout" component={LogOut} />
            <Route path="/User_Dashboard" component={User_Dashboard} />
            <Route path="/newItem" component={newItem} />
            <Route path="/TodaysLook" component={TodaysLook} />

            {/* link to render Update components */}
            <Route
              path="/posts/update/:postId"
              component={withRouter(Update)}
            />
          </Switch>
        </div>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
