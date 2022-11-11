import React from 'react';
import PropTypes from 'prop-types';
import styles from './Index.module.css';

// Custom components
import Header from '../../components/Header/Header';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Index = () => {

  return (
    <Container className="p-0" fluid>
      <Header />


    </Container>
)};


Index.propTypes = {};

Index.defaultProps = {};

export default Index;
