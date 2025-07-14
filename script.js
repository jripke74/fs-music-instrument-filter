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

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

selectContainer.addEventListener("change", function () {
  console.log(selectContainer.value);
});

function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
  let finalString = "";
  let finalArr = [];
  let instrument = "";
  let price = "";
  for (let i = 0; i < instruments.length; i++) {
    instrument = instruments[i].instrument;
    price = instruments[i].price;
    finalString = `<div class="card"><h2>${instrument}</h2><p>$${price}</p></div>`;
    finalArr.push(finalString);
  }
  return finalArr;
}

selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
