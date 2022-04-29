import React from 'react';
import styles from './styles.module.css';

class Table extends React.Component {
  render() {
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
          <tr>
            <td>Teste</td>
            <td>Teste</td>
            <td>Teste</td>
            <td>Teste</td>
            <td>Teste</td>
            <td>Teste</td>
            <td>Teste</td>
            <td>Teste</td>
            <td>Teste</td>
          </tr>
        </thead>
      </table>
    );
  }
}

export default Table;
