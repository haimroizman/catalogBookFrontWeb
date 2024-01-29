import React from "react";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Books from "./components/Books/Books";
import AddBookForm from "./components/Books/AddBookForm";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

function App() {
  const [addFormIsShown, setAddFormIsShown] = useState(false);

  const showAddBookFormHandler = () => {
    setAddFormIsShown(true);
  };

  const hideAddBookFormHandler = () => {
    setAddFormIsShown(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider />
      {addFormIsShown && <AddBookForm onClose={hideAddBookFormHandler} />}
      <Header onShowForm={showAddBookFormHandler} />
      <main>
        <Books />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
