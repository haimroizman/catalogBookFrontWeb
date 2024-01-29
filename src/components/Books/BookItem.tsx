import React from "react";
import { useState } from "react";
import Modal from "./Modal";

import GetBookDto from "../Interfaces/GetBookDto";

interface BookItemProps {
  book: GetBookDto;
  removeHandler: (bookId: string) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, removeHandler }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandleImageClick = (description: string) => {
    setIsModalOpen((prevModelValue) => !prevModelValue);
  };

  const publishedDate = new Date(book.publishedDate);
  return (
    <>
      {isModalOpen ? (
        <Modal onClose={() => setIsModalOpen(false)}>
          <p>{book.description}</p>
          <button className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mt-4 ml-4" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
        </Modal>
      ) : (
        <div className="bg-orange-50 shadow-md border-2 border-black rounded-md overflow-hidden">
          <div className="relative">
            <a
              className="w-full h-full inline-block"
              href="/#"
              onClick={() => onHandleImageClick(book.description)}
            >
              {book.imageLink ? (
                <img
                  className="w-full h-48 object-cover"
                  src={book.imageLink}
                  alt={book.title}
                />
              ) : (
                <div className="w-full h-48 object-cover bg-gray-400">
                  No Image
                </div>
              )}
            </a>
            <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 m-2 rounded-md">
              {book.genere}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p className="text-sm text-gray-500">{book.author}</p>
            <p className="text-sm text-gray-500">
              {publishedDate.toDateString()}
            </p>
            <p className="text-sm text-gray-500">{book.price}</p>
            {/* <p className="text-sm text-gray-500">{book.description}</p> */}
          </div>
          <button
            className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mb-4 ml-4"
            onClick={() => removeHandler(book._id)}
          >
            Remove
          </button>
        </div>
      )}
    </>
  );
};

export default BookItem;
