# Exercise 1.1

As indicated in the title, all the data still resides in the App Component passing it with props to Header, Content and Total

> I've stored the data in a array of Objects "parts" which contains the number of the Part, the title and the exercises.

## Content

With the "parts" parameter I created a **const parts** where I store each Part individually in a \<p> element with the Array.map function.

Then. I render the object directly.

## Total

Gets the total number of exercises directly from the App Component passed as a parameter calculated from the Array.filter function.
