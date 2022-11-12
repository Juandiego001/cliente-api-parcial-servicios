import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const Header = () => {

  return (
    <Link to="/" className="text-primary">
      <Container className="m-0 p-0 py-4 bg-primary text-light d-flex justify-content-center" fluid>
          Aplicación cliente para consumir Rest API para la clase de servicios telemáticos por Juan Diego Cobo y Andrés Ramirez Legarda
      </Container>
    </Link>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
