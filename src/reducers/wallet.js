import { SAVE_WALLET } from '../actions';

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
  default:
    return state;
  }
};
export default wallet;
