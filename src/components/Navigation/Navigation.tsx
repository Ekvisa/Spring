import React from "react";

import "./Navigation.scss";

import { Link, NavLink, Route, Routes } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/">Spring</NavLink>
        </li>
        <li>
          <NavLink to="/circle">Круг</NavLink>
        </li>
        <li>
          <NavLink to="/problems">Проблемы</NavLink>
        </li>
        <li>
          <NavLink to="/tests">Тесты</NavLink>
        </li>
        <li>
          <NavLink to="/about">О проекте</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
