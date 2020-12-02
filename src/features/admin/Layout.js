import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Redirect } from "react-router-dom";
import Container from "reactstrap/lib/Container";
import { Header } from "../headers";
import { getMessagesByGq } from "../messages/query";
import { AdminNavbar } from "../navbars";
import { Sidebar } from "../sidebars";
import route from "./route";
// import PropTypes from 'prop-types';

export default function Layout({ history, children }) {
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const mainRef = useRef(null);

  const routes = route;
  // routes.push(orerroute.childRoutes.map(item => (orerroute.path + "/" + item.path)))

  const orders_data = useQuery("orders", getMessagesByGq);

  const [orders, setorders] = useState([]);
  useEffect(() => {
    let cancel = true;
    if (cancel) {
      if (orders_data.data && orders_data.data.orders) {
        setorders(orders_data.data.orders);
      }else{
        setorders([])
      }
      cancel = false;
    }
  }, [orders_data.data]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // mainRef.current.scrollTop = 0;
  }, [mainRef]);

  const getBrandText = (path) => {
    for (let i = 0; i < routes.childRoutes.length; i++) {
      if (
        history.location.pathname.indexOf(
          routes.path + "/" + routes.childRoutes[i].path
        ) !== -1 &&
        routes.childRoutes[i].path !== ""
      ) {
        return routes.childRoutes[i].name;
      }
    }
    return "Brand";
  };
  return (
    (token && (
      <>
        <Sidebar
          // {...this.props}
          routes={routes}
          logo={{
            innerLink: "/dashboard/index",
            imgSrc: require("../../assets/img/brand/argon-react.png"),
            imgAlt: "...",
          }}
          orders={orders}
        />
        <div className="main-content" ref={(el) => (mainRef.current = el)}>
          <AdminNavbar
            // {...this.props}
            brandText={getBrandText(history.location.pathname)}
          />
          <Header />
          {children}
          <Container fluid></Container>
        </div>
      </>
    )) || <Redirect from="/" to={"/auth/login"} />
  );
}
Layout.propTypes = {};
Layout.defaultProps = {};
