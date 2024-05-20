import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/book.json";

export default function Freebook() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const freebook = list.filter((item) => item.category === "free");
  console.log(freebook);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Laboriosam cupiditate unde qui perspiciatis expedita dolorum.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {freebook.map((book, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <p className="mt-2 text-sm">{book.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
