import React from 'react';
// import { Component } from 'react';
import { Container } from './App.styled'
import { ToastContainer } from 'react-toastify';

import { Searchbar } from './Searchbar/Searchbar'
// import { Button } from './Button/Button'
// import {Loader} from './Loader/Loader'

export class App extends React.Component {
 
  state = {
    image: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  handleFormSubmit = imgName => {
    if (this.state.imgName !== imgName) {
      this.setState({
        imgName: imgName,
        page: 1,
        image: [],
      });
    }
  };

  render() {
    return (
      <Container>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <Button /> */}
      </Container>
  );
  }
 
};

// //===========pixabay
// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '29318386-adfa654ecd5a2c31c35ac8541';

