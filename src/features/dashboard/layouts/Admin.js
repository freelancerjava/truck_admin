
import React, { useEffect, useState, useRef } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import AdminFooter from "../components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

import routes from "../routes.js";

const Admin = ({history}) => {

  const [token, setToken] = useState(localStorage.getItem('jwt') || null)
  const mainRef = useRef(null)

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // mainRef.current.scrollTop = 0;
  }, [mainRef])

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
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
  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        history.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    token && <>
      <Sidebar
        // {...this.props}
        routes={routes}
        logo={{
          innerLink: "/dashboard/index",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "..."
        }}
      />
      <div className="main-content" ref={el => mainRef.current = el}>
        <AdminNavbar
          // {...this.props}
          brandText={getBrandText(history.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/dashboard/index" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </> || <Redirect from="/" to={"/auth/login"} />
  );
}

export default withRouter(Admin);
