import React from "react";
import classes from "./BooksSummary.module.css";

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2 className="font-bold text-xl">Experience the future the past and the present of literature in your CatalogBooks</h2>
      <p className="font-bold">A React-powered site for literature lovers</p>
      <p className="font-bold">
        Just choose a book and dive into captivating tales where science fiction, romance, action, drama... 
        meets imagination.
      </p>
    </section>
  );
};

export default BooksSummary;
