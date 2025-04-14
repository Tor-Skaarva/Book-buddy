import api from "../../ApiStore/Api";

/*Make two slices and define constant bookApi
get books
get a book
*/
/*Get all books!*/
const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      provideTags: ["books"],
    }),
    /*Get a book */
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
    }),
  }),
});
