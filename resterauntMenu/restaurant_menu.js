const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
//The forEach method loops through each element in the mainCourseMenu array
//For each item in the array, the arrow function (item, index) => {…} is executed


let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;
// the for loop itterates through the dessertMneu array, starts with index 0 and goes until reaching the end of the array
// for each iteration an html string is created using the current item in the dessertMenu with the addition of the items content because of the (i + 1) portion
