import React, { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../utils/FetchData";
import { useStateContext } from "../context/ContextProvider";

const BookEvent = () => {
  const { setActiveGuest } = useStateContext()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const createdGuest = await fetchData(
      "/api/add-guest/", "POST", { name, email,}
    );
    console.log(createdGuest.name)
    if (createdGuest.id) {
      setActiveGuest(createdGuest)
      navigate('/guests')
    } else {
      setFieldError(createdGuest);
    }
  };
  return (
    <>
      <Navbar color="bg-primary" burgerColor="text-secondary" />
      <div className="h-screen w-screen bg-secondary">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <h2 className="text-5xl font-bold mb-5 text-primary">
            Reserve a Spot
          </h2>
          <form className="flex flex-col justify-between w-4/5 md:w-2/5">
            <input
              type="text"
              className={`w-full border-1 h-14 p-3 ${fieldError.name ? 'border-red-500' : 'border-primary'}`}
              placeholder="Name"
              value={name}
              onChange={(e) => {setName(e.target.value); setFieldError('')}}
            />
            {fieldError.name && (
              <p className="text-red-500 text-sm mt-1 mb-5 text-center">{fieldError.email}</p>
            )}
            <input
              type="email"
              className={`w-full border-1 h-14 p-3 mt-5 ${fieldError.email ? 'border-red-500' : 'border-primary'}`}
              placeholder="Email"
              value={email}
              onChange={(e) => {setEmail(e.target.value); setFieldError('')}}
            />
            {fieldError.email && (
              <p className="text-red-500 text-sm mt-1 mb-5 text-center">{fieldError.email}</p>
            )}
            <h2 className="font-bold my-3 text-center">
              We'll be Expecting you {`${name}`}/ are you already on the guest
              list?
              <Link to="/check-reservation" className="text-blue-500">
                {" "}
                yes
              </Link>
            </h2>
            <Button
              onClick={handleSubmit}
              type="button"
              text="Submit"
              color="bg-primary"
              extra="font-bold m-auto border-2 hover:border-primary hover:border-2 hover:text-primary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookEvent;
