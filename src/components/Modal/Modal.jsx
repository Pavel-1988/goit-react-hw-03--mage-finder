import React,{Component} from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Window } from './Modal.styled';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  
   componentDidMount() {
     window.addEventListener('keydown',this.handleKeyDown);
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown =  e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal (
      <Overlay
        onClick={this.handleBackdropClick}
        onKeyPress={this.handleKeyDown}
      >
        <Window>{this.props.children}</Window>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};