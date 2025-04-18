/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */ import React from "react";
import { useGetBooksQuery } from "../components/Slicers/Bookslice";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookList() {
  const { data: books, error, isLoading } = useGetBooksQuery();

  if (isLoading)
    return <div className="text-center mt-5">Loading books...</div>;
  if (error)
    return <div className="alert alert-danger">Failed to load books.</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Library Catalog</h2>
      <form className="searchbar">
        <input
          className="form-control mr-sm-2 shadow-sm"
          type="search"
          placeholder="Search by title or author"
          aria-label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div className="row">
        {books?.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted">Author: {book.author}</p>
                <p className="card-text flex-grow-1">
                  {book.description?.slice(0, 100)}...
                </p>
                <img src={book.coverimage} alt={book.title} />
                <Link
                  to={`/books/${book.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
