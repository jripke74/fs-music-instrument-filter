# fs-music-instrument-filter

In this workshop, you will build a music instrument filter with JavaScript.

Step 1
You have been provided with a page containing several instrument cards. You are going to add functionality to this static page so you'll be able to filter the instruments depending on their family.

Start by creating a dropdown menu with the class of select-container.

Step 2
Now add four options to your dropdown, All, Woodwinds, Brass, and Percussion, in this order. For each option, use the lowercase option to specify the id attribute and the value attribute.

Step 3
Before starting to add the filter functionality to your page, link your script.js file to the HTML.

Step 4
Declare an empty array named instrumentsArr.

Step 5
instrumentsArr is going to hold an object for each of your instrument cards. Each object will have the keys category, instrument, and price.

Add a first object representing the flute to your array. For the values use woodwinds, Flute, and 500, respectively.

Step 6
Add another two objects to your instrumentsArr to represent the remaining woodwinds instruments, clarinet and oboe.

Step 7
The remaining instruments have been added for you to the instrumentsArr array.

Now, declare two variables selectContainer and productsContainer and assign them your HTML dropdown and the element with the class products-container, respectively.

Step 8
As you learned in the previous lesson videos, the change event is triggered when the user modifies the value of certain input elements. You want to be able to update your page any time that a new value is picked from the dropdown menu. For that, add an event listener for the change event to selectContainer.

For now, inside the callback, log the string this is a test to the console. Then, select different options from your dropdown menu and check the console to test that the event listener works correctly.

Step 9
Modify your console.log call to log the selected value from the dropdown.

Step 10
To implement the filter functionality, you'll need a function. Declare an empty function named instrumentCards that takes a single parameter.