import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

import { Link, withRouter } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";
import { NotificationSVG } from '../../extrafunc/svg';
import { user } from '../../axios';
import SearchBar from './SearchBar';


function AdminNavbar({ brandText, toggleMini }) {
  return (
    <>
      <Navbar className="navbar-top  navbar-light bg-white header p-2" fixed expand="md" id="navbar-main">

        <Container fluid>
          {/* <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {brandText}
          </Link> */}
          <div className='d-flex'>
            <button
              className="btn navbar-toggler-2"
              type="button"
              onClick={toggleMini}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Form className="navbar-search navbar-search-light form-inline ml-3 d-none d-md-flex mr-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative shadow-none border-0 rounded bg-main">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search " />
                    </InputGroupText>
                  </InputGroupAddon>
                  <SearchBar/>
                </InputGroup>
              </FormGroup>
            </Form>
          </div>
          <div className='d-flex'>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <i className="fa fa-plus mr-2" />
                    <span>Добавить</span>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem to="/admin/users/add" tag={Link}>
                    <i className="fa fa-user" />
                    <span>Пользователя</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/transports/add" tag={Link}>
                    <i className="fa fa-truck" />
                    <span>Транспорт</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/orders/add" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Заказ</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    {/* <i className="fa fa-plus mr-2" /> */}
                    <NotificationSVG />
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem to="/admin/users/?page=0&in_fltr=1&" tag={Link}>
                    <i className="fa fa-user" />
                    <span>Yangi foydalanuvchi ro'yxatdan o'tdi</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/transports/?page=0&in_fltr=1&" tag={Link}>
                    <i className="fa fa-truck" />
                    <span>Yangi transport qo'shildi</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/orders/" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Yangi buyurtma yaratildi</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {/* <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <NotificationSVG />
                  </Media>
                </DropdownToggle>
                {/* <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Кабинет</h6>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>Мой профиль</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Настройки</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Статистика</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>Поддержка</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-user-run" />
                    <span>Выход</span>
                  </DropdownItem>
                </DropdownMenu> 
              </UncontrolledDropdown>
            </Nav>
             */}
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      {/* {console.log(user)} */}
                      <img
                        alt="..."
                        src={user && user.user.attachments && user.user.attachments.main && user.user.attachments.main.result
                          || require("../../assets/img/avatar.png")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        {/* {JSON.parse(localStorage.getItem('user')).username} */}
                      {user && `${user.user.first_name} ` + ` ${user.user.second_name}` || 'Sardor Akhmedjanov'}
                    </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  {/* <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Кабинет</h6>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>Мой профиль</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Настройки</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Статистика</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>Поддержка</span>
                  </DropdownItem> */}
                  <DropdownItem divider />
                  <DropdownItem to="/auth/login" tag={Link}>
                    <i className="ni ni-user-run" />
                    <span>Выход</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  )
};

export default withRouter(AdminNavbar)

AdminNavbar.propTypes = {};
AdminNavbar.defaultProps = {};
