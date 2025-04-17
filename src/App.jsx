import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  NavBar,
  LoginPage,
  BookList,
  SingleBook,
  RegisterPage,
  AccountPage,
} from "./Pages/AllPages";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route> */}
          <Route path="/" element={<BookList />}></Route>
          <Route path="/books/:id" element={<SingleBook />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/user/me" element={<AccountPage />}></Route>
        </Routes>
    </>
  );
}

export default App;
