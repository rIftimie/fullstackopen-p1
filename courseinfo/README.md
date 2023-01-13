# Exercise 1.1

As indicated in the title, all the data still resides in the App Component passing it with props to Header, Content and Total

> I've stored the data in a array of Objects "parts" which contains the number of the Part, the title and the exercises.

## Content

With the "parts" parameter I created a **const parts** where I store each Part individually in a \<p> element with the Array.map function.

Then. I render the object directly.

## Total

Gets the total number of exercises directly from the App Component passed as a parameter calculated from the Array.filter function.

# Exercise 1.2

Now, we have created a Part Component which is used in the Content Component.

## Content

We pass on the data with the indexes of the parts array of Objects.

# Exercise 1.3 - 1.5

Most of the indications stated in these steps I've already made on previous ones.

I've used some deconstructuring in the Content and Part Component to ease up the reading process.

> The course and parts variables have been combined into a single variable.
