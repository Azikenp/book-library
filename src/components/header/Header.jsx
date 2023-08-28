import React from "react";
import Navbar from "../navbar/Navbar";
import SearchForm from "../searchForm/SearchForm";
import "./Header.css";

function Header() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your book of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            There are various books present in this library. <br /> You can get started by entering the name of the book you need to search for in the search bar below and you should get a result within minutes.
           <br /> Thanks for checking out our library, we really hope you would enjoy using it.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header;
