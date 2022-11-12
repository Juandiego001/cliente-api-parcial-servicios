import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';
import { useParams } from "react-router-dom";

// Custom components
import Header from '../../components/Header/Header';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import BooksService from '../../services/BooksService';

const Book = () => {

  const { id } = useParams();
  const [theBook, setTheBook] = useState({});

  useEffect(() => {
    BooksService.getBooks()
      .then(res => {
        let flagEntered = false;
        let gettedBook = {};

        res.data.books.forEach(book => {


          if (book.id == id) {
            setTheBook(book);
            flagEntered = true;
            gettedBook = book;
          }

          flagEntered ?
            document.title = "Book #" + id + "  | " + gettedBook.title
          :
            document.title = "Book not found";
        })
      })

      .catch(err => {
        alert('There was an error while trying to get the books from the server');
        console.log(err);
      })

  }, [])

  return (
    <Container className="p-0" fluid>
      <Header />

      <Container className="mt-5">
        {
          Object.keys(theBook).length != 0 ?
            <>
              <h1 className="mb-5">
                Book # {theBook.id} | {theBook.title}
              </h1>

              <p className="mb-5">
                {theBook.description}
              </p>

              <h6>
                Author: {theBook.author}.
              </h6>
            </>
          :
          ''
        }

      </Container>
    </Container>
  )
};

Book.propTypes = {};

Book.defaultProps = {};

export default Book;
