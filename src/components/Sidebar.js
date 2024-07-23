import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUser, faFile, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/mymoves" className={({ isActive }) => "sidebar-item" + (isActive ? " active" : "")}>
        <FontAwesomeIcon icon={faTruck} /> My Moves
      </NavLink>
      <NavLink to="/myprofile" className={({ isActive }) => "sidebar-item" + (isActive ? " active" : "")}>
        <FontAwesomeIcon icon={faUser} /> My Profile
      </NavLink>
      <NavLink to="/getquote" className={({ isActive }) => "sidebar-item" + (isActive ? " active" : "")}>
        <FontAwesomeIcon icon={faFile} /> Get Quote
      </NavLink>
      <NavLink to="/logout" className={({ isActive }) => "sidebar-item" + (isActive ? " active" : "")}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
