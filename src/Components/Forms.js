import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenses } from '../actions';
import { returnApi } from '../services/api';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      value: '0',
      description: 'Hot Dog',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
    };
  }

handleChange = ({ target: { name, value } }) => {
  this.setState({ [name]: value });
};

addId = () => {
  this.setState((prevState) => ({
    id: prevState.id + 1,
  }));
}

btnSave = async (e) => {
  e.preventDefault();
  const { dispatch } = this.props;
  const cotação = await returnApi();
  this.addId();
  const estado = this.state;
  dispatch(expenses(estado, cotação));
  this.setState({
    value: '0',
  });
}

render() {
  const metodosList = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const categoryList = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const { moedas } = this.props;
  const {
    value,
    description,
    currency,
    method,
    tag,
  } = this.state;
  return (
    <form>
      <fieldset>
        <legend>  DESPESAS </legend>

        💲
        <label htmlFor="number">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>

        💱
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            { moedas.map((e) => (
              <option value={ e } key={ e }>
                {e}
              </option>
            ))}
          </select>
        </label>

        👛
        <label htmlFor="method">
          Método
          <select
            id="method"
            name="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            { metodosList.map((el) => (
              <option value={ el } key={ el }>
                {el}
              </option>
            ))}
          </select>
        </label>

        🤑
        <label htmlFor="tag">
          Categoria
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            { categoryList.map((ele) => (
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
            value={ description }
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        <button
          type="submit"
          onClick={ (e) => this.btnSave(e) }
        >
          Adicionar despesa
        </button>
      </fieldset>
    </form>
  );
}
}

function mapStateToProps(state) {
  return {
    moedas: state.wallet.currencies,
    objetoDespesas: state.expenses,
  };
}

Forms.propTypes = {
  moedas: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Forms);
