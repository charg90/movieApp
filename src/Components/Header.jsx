import React from "react";
import { Link } from "react-router-dom";
// components
import SearchBar from "./SearchBar";
import NavFavorite from "./NavFavorite";
//css
import styles from "./../styles/navBar.module.css";
const Header = () => {
  console.log(styles);
  return (
    <>
      <header className="d-flex justify-content-center">
        <nav className={` navbar navbar-expand-lg navbar-light  `}>
          <Link
            className={`${styles.navBarLetters} navbar-brand text-white`}
            to="/"
          >
            Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link
                  to="/"
                  className={`${styles.navBarLetters} nav-link text-white`}
                >
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${styles.navBarLetters} nav-link text-white`}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            <NavFavorite />
          </div>
          <SearchBar />
        </nav>
      </header>
    </>
  );
};

export default Header;
