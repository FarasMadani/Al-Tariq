import React from "react";
import NavBar from "../Navbar";
import Cover1 from "../../../../Covers/theforthynawaiCover.png";
const books = () => {
    const handleReadClick = () => {
        window.open('/theforthynawai.pdf', '_blank');
      };
  return (
    <>
      <NavBar />
      <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <figure>
          <img className="mt-3 pt-3"
            src={Cover1}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">The Forthy Nawawi Hadith</h2>
          <div className="card-actions justify-center">
            <button className="btn btn-outline" onClick={handleReadClick}>Read</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default books;
