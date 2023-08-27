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
          </h2>{" "}
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            quasi eius sint eveniet iste fuga aperiam, veritatis atque illum
            unde optio, repudiandae voluptatem labore, consequatur nihil ipsum
            dolor reiciendis? Voluptatibus!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header;
