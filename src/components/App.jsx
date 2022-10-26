import React from 'react';
import { Component } from 'react';
// import { Container } from './App.styled'

// import { Button } from './Button/Button'
// import {Loader} from './Loader/Loader'

// export const App = () => {
//   return (
//     <Container>
//       <Button />
//     </Container>
//   );
// };

// //===========pixabay
// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '29318386-adfa654ecd5a2c31c35ac8541';

//===================================//

export  class App extends Component {

  state = {
    image: null,
    page: 1,
  }

 componentDidMount() {
   fetch(' `https://pixabay.com/api/?q=cat&page=1&key=29318386-adfa654ecd5a2c31c35ac8541&image_type=photo&orientation=horizontal&per_page=12')
    // .then(res => res.json())
    .then(image => this.setState({image}))

  }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {/* <ToastContainer autoClose={3000} /> */}
        {this.state.image && <div>{this.state.image.url}</div>}
      </div>
    );
  }
}