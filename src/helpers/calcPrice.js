export function calcSubPrice(product) {
  return product.count * product.item.price;
}

export function calcTotalPrice(movies) {
  let totalPrice = 0;
  movies.forEach((elem) => {
    totalPrice += elem.subPrice;
  });
  return totalPrice;
}
