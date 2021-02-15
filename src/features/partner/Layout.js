import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Redirect } from "react-router-dom";
import Container from "reactstrap/lib/Container";
import { Header } from "../headers";
import { AdminNavbar } from "../navbars";
import { Sidebar } from "../sidebars";
import SidebarParner from "../sidebars/SidebarParner";
import route from "./route";
// import PropTypes from 'prop-types';

export default function Layout({ history, children }) {
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const mainRef = useRef(null);
  const [mini, setMini] = useState(false)

  const toggleMini = () => {
    setMini(!mini)

  }

  const routes = route;

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
    <>
      {/* {!JSON.parse(localStorage.getItem('user')) && history.push('/auth/login')} */}
      <SidebarParner
        // {...this.props}
        mini={mini}
        routes={routes}
        logo={{
          innerLink: "/dashboard/index",
          imgSrc: mini ? require("../../assets/img/brand/minilogo.png") : require("../../assets/img/brand/logo.png"),
          imgAlt: "...",
        }}
      />
      <div className={`main-content  ${mini ? 'big-content' : ''}`} ref={(el) => (mainRef.current = el)}>
        <AdminNavbar
          toggleMini={toggleMini}
          // {...this.props}
          brandText={getBrandText(history.location.pathname)}
        />
        {/* <Header /> */}
        <Container className={'pt-7 pb-3 '} fluid>
          {children}
        </Container>
      </div>
    </>
  );
}
Layout.propTypes = {};
Layout.defaultProps = {};
