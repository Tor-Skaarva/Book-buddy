import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  BookList,
  SingleBook,
  RegisterPage,
  AccountPage,
} from "./Pages/AllPages";
import bookLogo from "./assets/books.png";
import NavBar from "./components/NavBar";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/books" element={<BookList />}></Route>
          <Route path="/books/:id" element={<SingleBook />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/user/me" element={<AccountPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
