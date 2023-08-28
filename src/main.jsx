import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About'
import BookList from './components/bookList/BookList'
import BookDetail from './components/bookDetails/BookDetail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
            <Route path='about' element={<About />} /> 
            <Route path='book' element={<BookList />} /> 
            <Route path='/book/:id' element={<BookDetail />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
