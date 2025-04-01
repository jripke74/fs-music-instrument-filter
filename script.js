// Step 4
// Declare an empty array named instrumentsArr.

// Step 5
// instrumentsArr is going to hold an object for each of your instrument cards.
// Each object will have the keys category, instrument, and price.

// Add a first object representing the flute to your array. For the values use
// woodwinds, Flute, and 500, respectively.

// Step 6
// Add another two objects to your instrumentsArr to represent the remaining
// woodwinds instruments, clarinet and oboe.

const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

// Step 7
// The remaining instruments have been added for you to the instrumentsArr array.

// Now, declare two variables selectContainer and productsContainer and assign them
// your HTML dropdown and the element with the class products-container, respectively.

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

// Step 8
// As you learned in the previous lesson videos, the change event is
// triggered when the user modifies the value of certain input
// elements. You want to be able to update your page any time that a
// new value is picked from the dropdown menu. For that, add an event
// listener for the change event to selectContainer.

// For now, inside the callback, log the string this is a test to
// the console. Then, select different options from your dropdown
// menu and check the console to test that the event listener works
// correctly.

// Step 9
// Modify your console.log call to log the selected value from the 
// dropdown.

selectContainer.addEventListener("change", function () {
  console.log(selectContainer.value);
});