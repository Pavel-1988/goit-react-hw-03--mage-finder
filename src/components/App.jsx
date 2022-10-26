import React from 'react';
// import { Component } from 'react';
import { Container } from './App.styled'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import {Loader} from './Loader/Loader'




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

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'pending',
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    
  }

  render() {

    const { status, image, imgName } = this.state;

    return (
      <Container>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'pending' && (
          <Container>
            <Loader />
          </Container>
        )}
        {image.length > 0 && (
          <Container>
            <ImageGallery images={image} imgAlt={imgName} />
            {status === 'pending' ? (<Loader />)
              : (
              <Button onClick={this.loadMore} />
            )}
          </Container>
        )}
      </Container>
  );
  }
 
};

// //===========pixabay
// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '29318386-adfa654ecd5a2c31c35ac8541';

