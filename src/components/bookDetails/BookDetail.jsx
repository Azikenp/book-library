import React, { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import coverImage from "../../images/cover_not_found.jpg";
import "./BookDetail.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

//https://openlibrary.org/works/OL45804W.json

const URL = "https://openlibrary.org/works/";

function BookDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "Description not found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImage,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject times found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subject found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  });

  return <div>BookDetail</div>;
}

export default BookDetail;
