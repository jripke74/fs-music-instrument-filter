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

// Step 10
// To implement the filter functionality, you'll need a function.
// Declare an empty function named instrumentCards that takes a
// single parameter.

// Step 11
// Within your new function, you need to filter the instruments
// depending on the selected category.

// Filter out items from instrumentsArr and make your function
// return an array containing the instrument objects with the same
// category of instrumentCategory. If instrumentCategory is equal
// to all, return the whole instrumentsArr array.

// Then, remove the console.log from the callback of your event
// listener and log the result of calling instrumentCards with the
// selected option from the dropdown menu as argument so you can
// test your function selecting different category options.

// Step 12
// Currently, your instrumentCards function returns an array with
// instrument objects, so you'll need another couple of steps before
// you can display your instrument cards on the page.

// Modify your function so that it returns an array of strings
// containing the HTML code to display the instrument cards, each
// string corresponding to an object in the instruments array. The
// strings should have this format
// <div class="card"><h2>[instrument]</h2><p>$[price]</p></div>

// Step 14
// When you select a category from the dropdown menu, the
// instrument cards are correctly filtered and displayed on the
// page, but you have to get rid of those commas in between the
// cards.

// Do it by joining the array returned by instrumentCards. With
// that, your music instrument filter is complete.

function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
  return instruments
    .map(({ instrument, price }) => {
      return `
              <div class="card">
                <h2>${instrument}</h2>
                <p>$${price}</p>
              </div>
            `;
    })
    .join("");
}

// Step 13
// Remove your console.log from the event listener and set the
// inner HTML of productsContainer to the result of calling
// instrumentCards with the selected category option.

// Then, select different options from your dropdown and see the
// result in the preview window.

selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
