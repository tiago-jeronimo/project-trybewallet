import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { removeExpense } from '../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.funcRemoveExpense = this.funcRemoveExpense.bind(this);
  }

  funcRemoveExpense(id) {
    const { expenses, dispatch } = this.props;
    const filter = expenses.filter((e) => e.id !== id);
    dispatch(removeExpense(filter));
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className={ styles.cssTabela }>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((element) => (
            <tr key={ element.id }>
              <td>{ element.description }</td>
              <td>{ element.tag }</td>
              <td>{element.method}</td>
              <td>{Number(element.value).toFixed(2)}</td>
              <td>{element.exchangeRates[element.currency].name}</td>
              <td>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
              <td>
                { Number(element.value * element.exchangeRates[element.currency].ask)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.funcRemoveExpense(element.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}
Table.propTypes = ({
  expenses: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
}).isRequired;

export default connect(mapStateToProps)(Table);
