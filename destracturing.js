const { name, price, quentity } = {
  name: "sari",
  price: 3000,
  quentity: 7,
};
const aro = [12,13,14]
const [first , second, third] = [12,13,14]
const discount = (price * 20) / 100;
const yourPay = price - discount;
const vat = (price * 7) / 100;
const totalAmount = yourPay + vat;
console.log(first);