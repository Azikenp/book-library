import React from 'react'
import { useGlobalContext } from '../../Context'
import Loader from '../loader/Loader'
import coverImg from '../../images/cover_not_found.jpg'
import './BookList.css'

//https://covers.openlibrary.org/b/id/240727-S.jpg

function BookList() {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singlebook) => {
    return{
      ...singlebook,
      //removing /works/ to get only id
    }
  })



  return (
    
  )
}

export default BookList