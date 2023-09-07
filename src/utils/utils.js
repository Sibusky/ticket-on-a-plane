export function formattedPrice(price) {
  const numberStr = price.toString();
  return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function convertPrice(price, currency) {
  if (currency === 'rub') {
    return formattedPrice(price) + ' ₽';
  }
  if (currency === 'usd') {
    return formattedPrice((price / 100).toFixed(2)) + ' $';
  }
  if (currency === 'eur') {
    return formattedPrice((price / 110).toFixed(2)) + ' €';
  }
}

export function formatTransfers(transfer) {
  if (transfer === 0) {
    return 'Без пересадок';
  }
  if (transfer === 1) {
    return `${transfer} пересадка`;
  }
  if (transfer > 1) {
    return `${transfer} пересадки`;
  }
}
