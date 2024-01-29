import React, { Fragment } from "react";
import bookcatalogImage from "../../assets/bookcatalog.jpg";
import classes from "./Header.module.css";
// import classes from "./header.module.css";

const Header = ({ onShowForm }: { onShowForm: any }) => {
  return (
    <Fragment>
      <div className="bg-white p-4 shadow rounded flex">
        <header className="flex justify-between items-center p-4 w-full">
          <h1 className="font-bold text-xl">My Books Catalog</h1>
          <button
            className="bg-black hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-xl"
            onClick={onShowForm}
          >
            <span>Add New Book</span>
          </button>
        </header>
      </div>

      <div className={classes["main-image"]}>
        <img
          className="w-full brightness-65 overflow-hidden"
          src={bookcatalogImage}
          alt="A differrent store full of cyber books"
        />
      </div>
    </Fragment>
  );
};

export default Header;
