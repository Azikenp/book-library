import React from 'react'
import './BookList.css'
import { Link } from 'react-router-dom'

function Book(book) {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book.cover_img} alt="book image" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Book