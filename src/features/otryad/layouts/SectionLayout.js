
import React, { useEffect, useState, useRef } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import Sidebar from "../components/Sidebar/Sidebar.js";

import routes from "../routes.js";

const Admin = ({history}) => {

  const [token, setToken] = useState(localStorage.getItem('jwt') || null)
  const mainRef = useRef(null)

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/section") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    token && <>
      <Sidebar
        // {...this.props}
        routes={routes}
        logo={{
          innerLink: "/section/index",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "..."
        }}
      />
      <div className="main-content" ref={el => mainRef.current = el}>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/section/index" />
        </Switch>
      </div>
    </> || <Redirect from="/" to={"/auth/login"} />
  );
}

export default withRouter(Admin);
