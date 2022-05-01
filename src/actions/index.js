export const SAVE_USER = 'SAVE_USER';
export const SAVE_WALLET = 'SAVE_WALLET';
export const SAVE_EXPENSES = 'SAVE_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const actionUser = (email) => ({
  type: SAVE_USER,
  email,
});

export const actionWallet = (info) => ({
  type: SAVE_WALLET,
  info,
});

export const expenses = (infos, cotação) => ({
  type: SAVE_EXPENSES,
  infos,
  cotação,
});

export const removeExpense = (info) => ({
  type: REMOVE_EXPENSE,
  info,
});
