import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btnDisable: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.validationLogin());
  }

  validationLogin = () => {
    const { email, password } = this.state;
    const magicNumber = 6;
    const exprReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(exprReg) && password.length >= magicNumber) {
      this.setState({
        btnDisable: false,
      });
    } else {
      this.setState({
        btnDisable: true,
      });
    }
  }

  btnClick = (e) => {
    e.preventDefault();
    console.table(this.state);
    const { history } = this.props;
    history.push('/carteira');
    const { dispatch } = this.props;
    const { email } = this.state;
    dispatch(actionUser(email));
  }

  render() {
    const { email, password, btnDisable } = this.state;
    return (
      <div>
        <label
          htmlFor="email"
        >
          Email:
          <input
            type="email"
            id="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="password"
        >
          Senha:
          <input
            type="password"
            id="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ btnDisable }
          type="submit"
          onClick={ (e) => this.btnClick(e) }
        >
          ENTRAR
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null)(Login);
