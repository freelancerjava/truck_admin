import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function ViewNav({ title, parentNav, edit_link, id, delMut }) {
  const history = useHistory()
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex align-items-center'>
        <h4 className='text-dark mb-0 mr-2'>{title}</h4>
        {edit_link && <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-light"
            href="#pablo"
            role="button"
            size="sm"
            color=""
            onClick={e => e.preventDefault()}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" left>
            <Link
              to={`${edit_link}`}>
              <DropdownItem
                href="#pablo"
              >Изменить</DropdownItem>
            </Link>
            <DropdownItem
              href="#123"
              onClick={e => {
                e.preventDefault()
                delMut({ id: id })
              }}
            >Удалить</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>}
      </div>
      <div className='d-flex'>
        <Link to={parentNav.url} onClick={(e) => {
          if (parentNav.action) {
            e.preventDefault()
            // parentNav.action()
            history.goBack()
          }
        }} className='text-primary mr-2'>
          {parentNav.title}
        </Link>
        <span className='text-muted'>{`${title === '' ? '' : ` > ${title}`}`}</span>
      </div>
    </div>
  );
};

ViewNav.propTypes = {};
ViewNav.defaultProps = {};
