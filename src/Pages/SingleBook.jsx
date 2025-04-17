/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */ import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../components/Slicers/Bookslice";

export default function SingleBook() {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id);
  const token = localStorage.getItem("token");

  if (isLoading) return <div>Loading book details...</div>;
  if (isError) return <div>Error loading book. Please try again.</div>;
  if (!book) return <div>Book not found.</div>;

  return (
    <div className="container mt-5">
      <h2>{book.title}</h2>
      <h5 className="text-muted">by {book.author}</h5>
      <p>{book.description}</p>
      <img src={book.coverimage} alt={book.title} />

      {token && <button className="btn btn-success mt-3">Checkout</button>}
    </div>
  );
}
