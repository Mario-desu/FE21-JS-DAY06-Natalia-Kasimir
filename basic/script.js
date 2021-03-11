/* Basic
Based on the following two Objects definitions:

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;
print the following message within the browser: My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories. */

let dataSandwiches = JSON.parse(sandwiches);
let dataFries = JSON.parse(fries);
// Prints data from Object1 
document.getElementById('printMsg').innerHTML = `My favorite sandwich is a ${dataSandwiches.sandwich} which has approximately ${dataSandwiches.calories} calories, along with it I enjoy eating Large French Fries which have about 570 calories, along with it I enjoy eating ${dataFries.fries_size} which have about ${dataFries.calories} calories. `

