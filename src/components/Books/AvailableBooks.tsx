import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import BookItem from "./BookItem";
import GetBookDto from "../Interfaces/GetBookDto";
import { RequestConfig, fetchBooks, removeBookItem } from "../../apis";
import { enqueueSnackbar } from "notistack";

const AvailableBooks: React.FC = () => {
  const queryCli = useQueryClient();

  const requestConfig: RequestConfig = {
    url: "http://127.0.0.1:3000/books",
    method: "GET",
  };

  const deleteRequestConfig: Partial<RequestInfo> = {
    url: "http://127.0.0.1:3000/books?idNumber={}",
    method: "DELETE",
  };

  const removeBookItemHandler = async (bookId: string) => {
    try {
      await mutateAsync(bookId);

      enqueueSnackbar("Book deleted successfully", { variant: "success" });
    } catch (error: unknown) {
      enqueueSnackbar((error as Error).toString(), { variant: "error" });
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: removeBookItem,
    onSuccess: () => {
      queryCli.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const {
    isPending,
    error,
    data: books,
  } = useQuery({
    gcTime: 0,
    queryKey: ["books"],
    queryFn: async () => {
      return fetchBooks(requestConfig);
    },
  });

  if (isPending) {
    return <p className="text-center text-2xl">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-2xl text-red-400">{error.toString()}</p>
    );
  }

  if (!books || books.length === 0) {
    return <p className="text-center text-2xl">No books found.</p>;
  }

  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book: GetBookDto) => (
        // Convert string to Date object
        // const publishedDate = new Date(book.publishedDate);
        <BookItem
          key={book.idNumber}
          book={book}
          removeHandler={(bookId: string) => removeBookItemHandler(bookId)}
        />
      ))}
    </div>
  );
};

export default AvailableBooks;
