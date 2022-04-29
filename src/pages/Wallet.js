import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionWallet } from '../actions';
import Header from '../Components/Header';
import { currency } from '../services/api';

class Wallet extends React.Component {
  async componentDidMount() {
    const resultAPI = await currency();
    const { dispatch } = this.props;
    const funcDispach = () => dispatch(actionWallet(resultAPI));
    funcDispach();
  }

  render() {
    return (
      <>
        <Header />
        <section>
          <h1>Aqui é a carteira</h1>
          <span>TrybeWallet</span>
        </section>
      </>);
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
