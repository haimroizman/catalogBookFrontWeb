import GetBookDto from "./components/Interfaces/GetBookDto";
import { AddBookDto } from "./components/Interfaces/GetBookDto";



export interface RequestConfig {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}



export async function fetchBooks(requestConfig: RequestConfig): Promise<GetBookDto[]>{
  const response = await fetch(requestConfig.url, {
    method: requestConfig.method,
  });

  if (!response.ok) {
    throw new Error("Request failed with status: " + response.status);
  }

  return response.json();
}


const deleteRequestConfig = {
  url: "http://127.0.0.1:3000/books",
  method: "DELETE",
};

export async function removeBookItem(bookId: string) {
  const response = await fetch(`${deleteRequestConfig.url}/${bookId}` , {
    method: deleteRequestConfig.method,
  });

  if (!response.ok) {
    throw new Error("Request failed with status: " + response.status);
  }

  return response.json();
}

const postRequestConfig = {
  url: "http://127.0.0.1:3000/books",
  method: "POST",
};

export async function addBookItem(book: AddBookDto) {
  const response = await fetch(postRequestConfig.url, {
    method: postRequestConfig.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  if (!response.ok) {
    throw new Error("Request failed with status: " + response.status);
  }

  return response.json();
}