import React from 'react';
// import { Component } from 'react';
import { Container } from './App.styled'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import SearchBar  from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import Button  from './Button/Button'
import Loader from './Loader/Loader'


class App extends React.Component {
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
    if (
      prevState.page !== this.state.page ||
      prevState.imgName !== this.state.imgName
    ) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.state.imgName}&page=${this.state.page}&key=29688696-be7a3ad549ffca9d5a732b68f&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error('Change your search query'));
        })
        .then(image => {
          if (image.totalHits === 0) {
            this.setState({ status: 'idle' });
            return toast.error(
              'Something went wrong. Try changing your search query'
            );
          }
          this.setState(prevState => ({
            image: [...prevState.image, ...image.hits],
            status: 'resolved',
          }));
        })
        .catch(error => {
          return toast.error(error.message);
        });
    }
  }

  render() {
    const { status, image, imgName } = this.state;

    return (
      <Container>
        <ToastContainer autoClose={2000} />
        <SearchBar onSubmit={this.handleFormSubmit} />
        {status === 'pending' && (
          <Container>
            <Loader />
          </Container>
        )}

        {image.length > 0 && (
          <Container>
            <ImageGallery images={image} imgAlt={imgName} />
            {status === 'pending' ? 
              <Loader />
             : 
              <Button onClick={this.loadMore} />
            }
          </Container>
        )}
      </Container>
    );
  }
}

export default App;
