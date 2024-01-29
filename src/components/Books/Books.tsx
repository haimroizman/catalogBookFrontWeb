import AvailableBooks from "./AvailableBooks";
import BooksSummary from "./BooksSummary";
// import AvailableBooks from "./AvailableBooks";
import React, { Fragment } from "react";

const Books = () => {
  return (
    <Fragment>
      <BooksSummary />
      <AvailableBooks />
    </Fragment>
  );
};

export default Books;
