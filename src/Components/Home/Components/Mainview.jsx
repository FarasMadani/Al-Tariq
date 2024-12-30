import React from "react";
import QuranLogo from "../../../assets/QuranLogo.png";
import Adhkar from "../../../assets/Adhkar.png";
import Roadmap from "../../../assets/Roadmap.png";
import Book from "../../../assets/Book.png";
import { Routes, Route, Link } from "react-router-dom";

const Mainview = () => {
  const buttons = [
    { image: QuranLogo, alt: "Quran", label: "Quran", link: "/quran" },
    { image: Adhkar, alt: "Adhkar", label: "Adhkar", link: "/adhkar" },
    { image: Book, alt: "Books", label: "Books", link: "/books" }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {/* Grid Container for buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-screen-lg my-10 mx-5">
        {buttons.map((button, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:scale-110 duration-300 transition-all"
          >
            <Link to={button.link}>
              <button aria-label={button.label}>
                <img
                  src={button.image}
                  alt={button.alt}
                  className="h-20 w-20 mb-2"
                />
                <p className="text-center">{button.label}</p>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainview;