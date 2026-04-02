import React from "react";

import "./Main.scss";

import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div className="spring">
        <h1>Spring</h1>
      </div>
      <section>
        <p className="help">Сервис, который помогает разобраться в себе</p>
        <p className="motto">Пусть снег превратится в весну!</p>
        <Link to="/about" className="project">
          О проекте
        </Link>
      </section>
      <section>
        <p>
          Некоторые уже смогли отогреться и зацвести.
          <br />
          Возможно, теперь ваша очередь.
        </p>
        <Link to="/circle" className="stories">
          Посмотреть истории
        </Link>
      </section>
    </div>
  );
}

export default Main;
