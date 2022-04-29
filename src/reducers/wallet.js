import { SAVE_EXPENSES, SAVE_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_WALLET:
    return {
      ...state,
      currencies: action.info,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses,
        {
          id: action.infos.id,
          value: action.infos.value,
          description: action.infos.description,
          currency: action.infos.currency,
          method: action.infos.method,
          tag: action.infos.tag,
          exchangeRates: action.cotação,
        }],
    };
  default:
    return state;
  }
};
export default wallet;
