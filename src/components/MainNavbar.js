import { Link } from "react-router-dom";
import React from "react";
import classes from "./MainNavbar.module.css";



const MainNavbar = () => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <br/>
          <h1>YAN WU HSU</h1>
          <p className={classes['special-p']}>Photography</p>
          <hr />
          <ul className={classes.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About / 關於</Link>
            </li>
            <li>
              <Link to="/introduction">Service / 服務介紹</Link>
            </li>
            <li>
              <Link to="/project">Gallary / 作品</Link>
            </li>
            <li>
              <Link to="/booking">Booking / 預約攝影</Link>
            </li>
            <li>
              <Link to="/contact">Contact / 聯絡我</Link>
            </li>
            <li>
              <Link to="/callback">Member / 會員</Link>
            </li>
          </ul>
          <hr />
        </nav>
      </header>
    </>
  );
};

export default MainNavbar;
