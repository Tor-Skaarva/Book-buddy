import { Link, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../components/Slicers/Bookslice";

export default function SingleBook() {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id);
  const token = localStorage.getItem("token");

  if (isLoading) return <div>Loading book details...</div>;
  if (isError) return <div>Error loading book. Please try again.</div>;
  if (!book) return <div>Book not found.</div>;

  return (
    <>
      <Link to={`/`} className="return-home">
        Return to catalog
      </Link>
      <div className="details-container">
        <img src={book.coverimage} alt={book.title} />
        <div className="details-info">
          <h2>{book.title}</h2>
          <h5>by {book.author}</h5>
          <p>{book.description}</p>
          {token && <button>Checkout</button>}
        </div>
      </div>
    </>
  );
}
