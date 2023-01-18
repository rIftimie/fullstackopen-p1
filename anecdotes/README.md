# Exercise 1.12\* step 1

Rendered a button with a `changeAnecdote`function which generates a random number depending on the `anecdotes.length` and changes it with `setSelected`

# Exercise 1.13\* step 2

New useState for `points` which is an array of length equal to anecdotes filled with 0's.

Rendered a new button which triggers a `upVote`function where it creates a copy of the `points`array and updates de index related to the anecdote adding 1 to the value.

# Exercise 1.14\* step 3

Finished the exercise by creation two variables:

1. `mostUpvotes` Which uses **array.reduce** to get the biggest number of the points array.
2. `bestAnecdote` Uses **array.filter** to return the anecdote which votes are equal to the `mostUpvotes`
