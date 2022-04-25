import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metodos: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      category: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  render() {
    const { moedas } = this.props;
    const { metodos, category } = this.state;
    return (
      <form>
        <fieldset>
          <legend>  DESPESAS </legend>

          💲
          <label htmlFor="number">
            Valor:
            <input type="number" id="number" name="number" data-testid="value-input" />
          </label>

          💱
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="moeda" data-testid="currency-input">
              { moedas.map((e) => (
                <option value={ e } key={ e }>
                  {e}
                </option>
              ))}
            </select>
          </label>

          👛
          <label htmlFor="metodo">
            Método
            <select id="metodo" name="metodo" data-testid="method-input">
              { metodos.map((el) => (
                <option value={ el } key={ el }>
                  {el}
                </option>
              ))}
            </select>
          </label>

          🤑
          <label htmlFor="categoria">
            Categoria
            <select id="categoria" name="categoria" data-testid="tag-input">
              { category.map((ele) => (
                <option value={ ele } key={ ele }>
                  {ele}
                </option>
              ))}
            </select>
          </label>

          ✍️
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              data-testid="description-input"
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    moedas: state.wallet.currencies };
}

Forms.propTypes = {
  moedas: PropTypes.node.isRequired,
};

export default connect(mapStateToProps)(Forms);
