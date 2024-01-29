import React from "react";
import Modal from "./Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { addBookItem } from "../../apis";
import { AddBookDto } from "../Interfaces/GetBookDto";



const AddBookForm = ({ onClose }: { onClose: () => void }) => {
  // const removeBookItemHandler = async (bookId: string) => {
  //   try {
  //     await mutateAsync(bookId);

  //     enqueueSnackbar("Book deleted successfully", { variant: "success" });
  //   } catch (error: unknown) {
  //     enqueueSnackbar((error as Error).toString(), { variant: "error" });
  //   }
  // };

  // const { mutateAsync } = useMutation({
  //   mutationFn: removeBookItem,
  //   onSuccess: () => {
  //     queryCli.invalidateQueries({ queryKey: ["books"] });
  //   },
  // });

  const queryCli = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: addBookItem,
    onSuccess: () => {
      queryCli.invalidateQueries({ queryKey: ["books"] });
      onClose();
    },
  });

  const handleAddBookSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    try {
      const bookData: AddBookDto = {
        title: formDataObj.title.toString(),
        author: formDataObj.author.toString(),
        description: formDataObj.description.toString(),
        publishedDate: new Date(formDataObj.publishedDate.toString()),
        idNumber: Number(formDataObj.idNumber),
        genere: formDataObj.genere.toString(),
        price: Number(formDataObj.price),
        imageLink: formDataObj.imageLink.toString(),
        // Add other properties here
      };

      await mutateAsync(bookData);

      enqueueSnackbar("Book added successfully", { variant: "success" });
    } catch (error: unknown) {
      enqueueSnackbar((error as Error).toString(), { variant: "error" });
    }
    

    // mutation.mutate(formDataObj);
  };

  return (
    <Modal onClose={onClose}>
      <form className="space-y-4" onSubmit={handleAddBookSubmit}>
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="John Doe"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Author</span>
          <input
            type="text"
            name="author"
            id="author"
            className="mt-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="Author Name"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Description</span>
          <input
            type="text"
            name="description"
            id="description"
            className="mt-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="Description"
            required
          ></input>
        </label>
        <label className="block">
          <span className="text-gray-700">PublishedDate</span>
          <input
            type="date"
            name="publishedDate"
            id="publishedDate"
            className="mt-1 border mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="12/12/2021"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">IdNumber</span>
          <input
            type="number"
            name="idNumber"
            id="idNumber"
            className="mt-1 border mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="44"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Genere</span>
          <input
            type="text"
            name="genere"
            id="genere"
            className="mt-1 border mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="Science fiction || Satire || Drama || Action || Romance || Mystery || Horror."
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Price</span>
          <input
            type="number"
            name="price"
            id="price"
            className="mt-1 border mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="12.99"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">imageLink</span>
          <input
            type="text"
            name="imageLink"
            id="imageLink"
            className="mt-1 border mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
            placeholder="Enter image URL"
          />
        </label>
        {/* "cursor-pointer bg-black text-white border-blue-800 font-bold py-2 px-8 rounded-lg hover:bg-yellow-500 mr-4 float-right"> */}
        <button className="bg-sky-600 text-sky-50 p-2 px-4 rounded-md hover:bg-sky-800 w-full">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddBookForm;
