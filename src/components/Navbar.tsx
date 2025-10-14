import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [view, setView] = useState<"login" | "register">("login");

  const openModal = () => {
    setView("login");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="text-white flex justify-around items-center p-4 ">
        <div className="text-4xl font-extrabold">
          <span className="text-green-400">thakur</span>store
          <span className="text-green-400">.</span>
        </div>
        <div className="flex justify-between w-82 cursor-pointer">
          <Link to="/">Home</Link>
          <Link to="/product-page">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <button
            onClick={openModal}
            className="flex justify-center items-center w-32 gap-4 cursor-pointer"
          >
            Log in
            <FaArrowRight />
          </button>
        </div>

        <Modal isOpen={isOpen} isClose={closeModal}>
          {view === "login" ? <Login /> : <Register />}
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
