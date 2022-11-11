import { React, useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.css';

// Custom components
import Header from '../../components/Header/Header';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

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
      }
    ])
  };

  useEffect(handleBooks, []);
  
  const [books, setBooks] = useState([]);  

  return (
    <Container className="p-0" fluid>
      <Header />

      <Container className="my-5">
        <div className="row text-center">
          <div className={"col " +  styles.ThemedGridCol}>
            <FontAwesomeIcon icon={faPlusSquare} className={"text-primary display-1 " + styles.PointerHover}/>
          </div>
          <div className={"col " +  styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
            <h3>Id</h3>
          </div>
          <div className={"col " +  styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
            <h3>Title</h3>
          </div>
          <div className={"col " +  styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
            <h3>Description</h3>
          </div>
          <div className={"col " +  styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
            <h3>Author</h3>
          </div>
        </div>
        
            {
              books.map((book, index) => {
                return (
                  <div key={index} className="row text-center">
                    <div className={"col " +  styles.ThemedGridCol}>
                      <FontAwesomeIcon icon={faPen} className={"me-2 text-warning display-5 " + styles.PointerHover}/>
                      <FontAwesomeIcon icon={faTrash} className={"text-danger display-5 " + styles.PointerHover}/>
                    </div>
                    <div className={"col " +  styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
                      <h5>{book.id}</h5>
                    </div>
                    <div className={"col " +  styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
                      <h5>{book.title}</h5>
                    </div>
                    <div className={"col " +  styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
                      <h6>{book.description}</h6>
                    </div>
                    <div className={"col " +  styles.ThemedGridCol + " d-flex justify-content-center align-items-center"}>
                      <h5>{book.author}</h5>
                    </div>
                  </div>
                )
              })
            }
          
      </Container>
    </Container>
)};


Index.propTypes = {};

Index.defaultProps = {};

export default Index;
