import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Forms from './Forms';
import styles from './styles.module.css';

class Header extends React.Component {
  render() {
    const { emailState, despesas } = this.props;
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
                { despesas.length > 0
                  ? despesas.map((e) => Number(e.value)
                * Number(e.exchangeRates[e.currency].ask))
                    .reduce((acc, elem) => acc + elem).toFixed(2)
                  : 0}
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
    emailState: state.user.email,
    despesas: state.wallet.expenses,
  };
}

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
  despesas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
