import React from "react";

import "./Navigation.scss";

import { Link, Route, Routes } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Spring</Link>
        </li>
        <li>
          <Link to="/circle">Круг</Link>
        </li>
        <li>
          <Link to="/problems">Проблемы</Link>
        </li>
        <li>
          <Link to="/tests">Тесты</Link>
        </li>
        <li>
          <Link to="/about">О проекте</Link>
        </li>

        {/* <Link to={`#`}>Обсудить мою проблему</Link> */}
      </ul>
    </nav>
  );
}

export default Navigation;
