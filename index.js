// Write your solution in this file!
const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake";

function addBurger() {
    const newBurger = "Flatburger";
burgers.push(newBurger);
}
  addBurger()
console.log(burgers);

if (true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}
console.log(burgers)

function changedFeaturedDrink() {
    featuredDrink = "The JavaShake"
    //console.log(featuredDrink)
}
changedFeaturedDrink()
console.log(featuredDrink)