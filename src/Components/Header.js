import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { emailState } = this.props;
    return (
      <header>
        <h2>Esse é o Header</h2>
        <span data-testid="email-field">
          Esse é o seu e-mail:
          {emailState}
        </span>
        {' '}
        <br />
        <span data-testid="total-field"> Campo total | 0</span>
        {' '}
        <br />
        <span data-testid="header-currency-field">Moeda | BRL</span>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    emailState: state.user.email };
}

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
