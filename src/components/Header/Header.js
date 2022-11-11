import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const Header = () => {

  return (
    <Container className="m-0 p-0 py-3 bg-primary text-light text-center" fluid>
      Aplicación cliente para consumir Rest API para la clase de servicios telemáticos por Juan Diego Cobo y Andrés Ramirez Legarda
    </Container>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
