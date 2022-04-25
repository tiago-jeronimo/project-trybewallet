import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Forms from './Forms';
import styles from './styles.module.css';

class Header extends React.Component {
  render() {
    const { emailState } = this.props;
    return (
      <div>
        <fieldset className={ styles.container }>
          <legend>
            <h2>Esse é o Header</h2>
          </legend>
          <header className={ styles.filho }>
            <div className={ styles.filho }>
              <p data-testid="email-field">
                Esse é o seu e-mail:
                {emailState}
              </p>
            </div>
            <div className={ styles.filho }>
              <p data-testid="total-field">
                Campo total - 0
              </p>
            </div>
            <div className={ styles.filho }>
              <p data-testid="header-currency-field">Moeda - BRL</p>
            </div>
          </header>
        </fieldset>
        <Forms />
      </div>
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
