import React, { Component } from 'react';
// import { Component } from 'react';
import {SearcContainer,SearchForm, SearchInput} from './Searchbar.styled'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


// import { Report } from 'notiflix/build/notiflix-report-aio';

export class Searchbar extends Component {
  state = {
    imgName: ''
  };

  // handleChange = e => {
  //   const { imgName, value  } = e.currentTarget;
  //   this.setState({ [imgName]:value });
  // };

  //================================================================
  handleSubmit = (values, { resetForm }) => {
    if (values.imgName.trim() === '') {
      return toast.error('Please enter your search query');
    }
    this.props.onSubmit(values.imgName);
    resetForm();
  };
  //==========================================================

  //============низ========//
  //  handleSubmit = e => {
  //   if (e.imgName.trim() === '') {
  //     return Report.warning('Please enter your search query');
  //   }
  //   this.props.onSubmit(e.imgName);
  //   this.reset();
  // };
  //============вверх========//

  //===========================низ
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  //   console.log(this.state)
  //   this.reset();
  // };
  //===========================нвверх

  reset = () => {
    this.setState({imgName: ''});
  };

  render() {
    return (
      <SearcContainer >
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit">
            <span >Search</span>
          </button>

          <SearchInput
            name="imgName"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearcContainer>

    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};