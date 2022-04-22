import React from 'react';
import Header from '../Components/Header';

class Wallet extends React.Component {
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

export default Wallet;
