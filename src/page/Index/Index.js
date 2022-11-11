import { React, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.css';

// Custom components
import Header from '../../components/Header/Header';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  function handleBooks() {
    setBooks([
      {
        'id': 1,
        'title': 'La hojarasca',
        'description': 'Good one',
        'author': 'Gabo'
      },
      {
        'id': 2,
        'title': 'El coronel no tiene quien le escriba',
        'description': 'Interesting',
        'author': 'Gabo'
      },
      {
        'id': 3,
        'title': 'El coronel no tiene quien le escriba',
        'description': 'Interesting',
        'author': 'Gabo'
      }
    ])

    setSelectedBook({
      'id': 3,
      'title': 'El coronel no tiene quien le escriba',
      'description': 'Interesting',
      'author': 'Gabo'
    });
  };

  useEffect(handleBooks, []);

  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    'id': 1,
    'title': 'La hojarasca',
    'description': 'Good one',
    'author': 'Gabo'
  });
  const [selectedBook, setSelectedBook] = useState({
    'id': 1,
    'title': 'La hojarasca',
    'description': 'Good one',
    'author': 'Gabo'
  });
  const [newId, setNewId] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleNewId = (e) => {
    setNewId(e.target.value);
  };

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleNewDescription = (e) => {
    setNewDescription(e.target.value);
  };

  const handleNewAuthor = (e) => {
    setNewAuthor(e.target.value);
  };

  const handleNewBook = (newBook) => {
    setNewBook(newBook);
  }

  const handleSelectedBook = (selectedBook) => {
    setSelectedBook(selectedBook);
    setNewId(selectedBook.id);
    setNewTitle(selectedBook.title);
    setNewDescription(selectedBook.description);
    setNewAuthor(selectedBook.author);
  }

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  const handleEdit = (book) => {
    handleSelectedBook(book);
    setShowEdit(!showEdit);
  };

  const handleDelete = (book) => {
    handleSelectedBook(book);
    setShowDelete(!showDelete)
  };

  const addNewBook = (title, description, author, id = null) => {
    let newBook = {};

    // Añadiendo id como opcional
    if (id) {
      newBook = {
        'id': id,
        'title': title,
        'description': description,
        'author': author
      };
    } else {
      let lastId = 0;

      books.forEach((book) => {
        if (lastId < book.id) {
          lastId = book.id;
        }
      })

      lastId++;

      newBook = {
        'id': lastId,
        'title': title,
        'description': description,
        'author': author
      };
    }

    return newBook;
  }

  const addBook = (e) => {
    let booksTemporal = books;
    booksTemporal.push(addNewBook(newTitle, newDescription, newAuthor));
    handleAdd();
  }

  const editBook = (e) => {
    let id = selectedBook.id;
    let booksTemporal = books;

    // Para efectos del arreglo
    books.forEach((book, index) => {
      if (book.id == id) {
        if (newId == '') {
          booksTemporal[index] = addNewBook(newTitle, newDescription, newAuthor);
        } else {
          booksTemporal[index] = addNewBook(newTitle, newDescription, newAuthor, id = newId);
        }
      }
    })

    setBooks(booksTemporal);
    handleEdit(booksTemporal[0]);
    setNewId('');
    setNewTitle('');
    setNewDescription('');
    setNewAuthor('');
  }

  const deleteBook = () => {
    let id = selectedBook.id;
    let booksTemporal = books;

    // Para efectos del arreglo
    books.forEach((book, index) => {
      if (book.id == id) {
        booksTemporal.splice(index, 1);
      }
    })


    if (booksTemporal.length == 0) {
      setBooks(booksTemporal.length == 0 ? [] : booksTemporal);
      handleDelete({
        'id': 1,
        'title': 'La hojarasca',
        'description': 'Good one',
        'author': 'Gabo'
      });
    } else {
      setBooks(booksTemporal);
      handleDelete(booksTemporal[0]);
    }

  }

  return (
    <Container className="p-0" fluid>
      <Header />

      <Container className="my-5">
        <div className="row text-center">
          <div className={"col " + styles.ThemedGridCol}>
            <FontAwesomeIcon icon={faPlusSquare} className={"text-primary display-1 " + styles.PointerHover} onClick={() => handleAdd()} />
          </div>
          <div className={"col " + styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
            <h3>Id</h3>
          </div>
          <div className={"col " + styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
            <h3>Title</h3>
          </div>
          <div className={"col " + styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
            <h3>Description</h3>
          </div>
          <div className={"col " + styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
            <h3>Author</h3>
          </div>
        </div>

        {
          books.map((book, index) => {
            return (
              <div key={index} className="row text-center">
                <div className={"col " + styles.ThemedGridCol}>
                  <FontAwesomeIcon onClick={() => handleEdit(book)} icon={faPen} className={"me-2 text-warning display-5 " + styles.PointerHover} />
                  <FontAwesomeIcon onClick={() => handleDelete(book)} icon={faTrash} className={"text-danger display-5 " + styles.PointerHover} />
                </div>
                <div className={"col " + styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
                  <h5>{book.id}</h5>
                </div>
                <div className={"col " + styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
                  <h5>{book.title}</h5>
                </div>
                <div className={"col " + styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
                  <h6>{book.description}</h6>
                </div>
                <div className={"col " + styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
                  <h5>{book.author}</h5>
                </div>
              </div>
            )
          })
        }

        {/* Modal para crear */}
        <Modal show={showAdd}>
          <Modal.Header closeButton onClick={() => handleAdd()}>
            <Modal.Title>Agregar un libro</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el título" onChange={handleNewTitle} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Ingresa la descripción" onChange={handleNewDescription} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el autor" onChange={handleNewAuthor} />
              </Form.Group>

              <Button variant="primary" onClick={() => addBook()}>Aceptar</Button>{' '}
              <Button variant="secondary" onClick={() => handleAdd()}>Cancelar</Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Modal para editar */}
        <Modal show={showEdit}>

          <Modal.Header closeButton onClick={() => handleEdit(selectedBook)}>
            <Modal.Title>Editar un libro</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el id" value={newId} onChange={handleNewId} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el título" value={newTitle} onChange={handleNewTitle} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Ingresa la descripción" value={newDescription} onChange={handleNewDescription} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el autor" value={newAuthor} onChange={handleNewAuthor} />
              </Form.Group>

              <Button variant="primary" onClick={() => editBook()}>Aceptar</Button>{' '}
              <Button variant="secondary" onClick={() => handleEdit(selectedBook)}>Cancelar</Button>
            </Form>
          </Modal.Body>

        </Modal>

        {/* Modal para confirmar eliminación */}
        <Modal show={showDelete}>
          <Modal.Header closeButton onClick={() => handleDelete(selectedBook)}>
            <Modal.Title>Confirmar eliminación</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>¿Segur@ que desea eliminar el libro?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={() => deleteBook()}>Aceptar</Button>
            <Button variant="secondary" onClick={() => handleDelete(selectedBook)}>Cancelar</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  )
};


Index.propTypes = {};

Index.defaultProps = {};

export default Index;
