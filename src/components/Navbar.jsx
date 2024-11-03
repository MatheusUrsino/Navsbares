import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src="./logo.svg" alt="" className="logoNavBar" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/services">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Serviços</NavLink>
        </li>
        <li>
          <NavLink to="/leitura">Doação</NavLink>
        </li>
        <li>
          <NavLink to="/leitura">Documentação</NavLink>
        </li>
        <li>
          <NavLink to="/leitura">Relatos</NavLink>
        </li>
        <li>
          <div className="user">
            <SignedOut>
              <div className="button">
              <SignInButton className="signIn" />
              </div>
            </SignedOut>
            <SignedIn>
              <div className="user-icon">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </li>
      </ul>
    </nav>
  );
};
