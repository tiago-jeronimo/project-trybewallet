export const SAVE_USER = 'SAVE_USER';
export const SAVE_WALLET = 'SAVE_WALLET';

export const actionUser = (email) => ({
  type: SAVE_USER,
  email,
});

export const actionWallet = (info) => ({
  type: SAVE_WALLET,
  info,
});
