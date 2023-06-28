// Prompt 2
const garageSale = require("./guided_practice_data")

// Prompt 3
// Print an array of all the item names in garageSale.
const printName = (item) => {
  return item.name
}
console.log(garageSale.map(printName))
// Prompt 4
// Print an array of arrays of all the items with their prices.
// For example: [["blue sweater", 20], ["yellow raincoat", 20]];
const printNamePrice = (item) => {
  return [item.name, item.price]
}
console.log(garageSale.map(printNamePrice))
// Prompt 5
// Print an array of all the items that are less or equal to $50.
const print50 = (item) => {
  return item.price <= 50
}

console.log(garageSale.filter(print50))

// Prompt 6
// Print an array of all the items whose condition are "used."
const printUsed = (item) => {
  return item.condition === "used"
}
console.log(garageSale.filter(printUsed))
// Prompt 7
// Print all the prices in garageSale array into a new array.
const findPriceArray = (item) => {
  return item.price
}
const priceArray = garageSale.map(findPriceArray)
console.log(priceArray)
// Prompt 8
// Print the total cost of the garageSale array.
const addPriceArray = (accumulator, currentValue) => {
  return accumulator + currentValue
}
const addArray = priceArray.reduce(addPriceArray)
console.log(addArray)
// Prompt 9
// Print the average price for the garage sale.
const numberOfItems = garageSale.length
const averagePrice = addArray / numberOfItems
console.log(averagePrice)