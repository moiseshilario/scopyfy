import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';
import { Container } from './styles';

const ErrorBox = ({ errorMessage, visible, hideError }) => visible && (
<Container>
  <p>{errorMessage}</p>
  <button type="button" onClick={hideError}>
        x
  </button>
</Container>
);

ErrorBox.propTypes = {
  errorMessage: PropTypes.string,
  visible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  errorMessage: state.error.message,
  visible: state.error.visible,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
