import HoldOn from 'react-hold-on';

const options = {
  theme: 'sk-dot',
  message: 'Please wait...',
  backgroundColor: '#1847B1',
  textColor: 'white',
};

export const showLoader = () => {
  HoldOn.open(options);
};

export const hideLoader = () => {
  HoldOn.close();
};
export const currencyFormat = (num) => {
  return `₦${num?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
};

