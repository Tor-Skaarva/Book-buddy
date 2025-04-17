/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React from "react";
import { useGetAccountQuery } from "../components/Slicers/UserSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
  const navigate = useNavigate;
  const { status, data: user } = useGetAccountQuery();
  const [account, setAccount] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    localStorage.getItem("token") ? null : navigate("login");
  }, []);

  useEffect(() => {
    if (status.toLowerCase() === "fulfilled") {
      setAccount(user);
    }
  }, [status]);
  console.log(account);
  return (
    <div>
      <p>Name: {account.firstname}</p>
      <p>Email: {account.email}</p>
    </div>
  );
}
