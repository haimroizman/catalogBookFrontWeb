interface GetBookDto {
  _id: string;
  title: string;
  author: string;
  description: string;
  publishedDate: Date;
  idNumber: number;
  genere: string;
  price: number;
  imageLink?: string;
}


export  interface AddBookDto {
  title: string;
  author: string;
  description: string;
  publishedDate: Date;
  idNumber: number;
  genere: string;
  price: number;
  imageLink?: string;
}


export default GetBookDto;
