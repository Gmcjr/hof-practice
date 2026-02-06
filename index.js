const movies = [
  {
    title: 'The Rule of Jenny Pen',
    director: 'James Ashcroft',
    year: 2025,
    genres: ['Horror', 'Drama', 'Thriller'],
    runtime: {
      unit: 'Minutes',
      length: 104
    },
    stars: 3.5,
    entryLogged: 'March 11, 2025',
    review: null,
    comments: [
      {
        username: 'elizabeth-dane',
        text: 'Loved it!',
        date: 'March 12, 2025'
      },
      {
        username: 'rj-macready',
        text: 'Rush and Lithgow killed it.',
        date: 'March 12, 2025'
      }
    ]
  },
  {
    title: 'Mickey 17',
    director: 'Bong Joon Ho',
    year: 2025,
    genres: ['Comedy', 'Adventure', 'Science Fiction'],
    runtime: {
      unit: 'Minutes',
      length: 137
    },
    stars: 3.5,
    entryLogged: 'March 9, 2025',
    review: "Feels like it's missing an act.",
    comments: [
      {
        username: 'elizabeth-dane',
        text: 'NO NOT THE SAUCEEEEEEEEE!!!!!',
        date: 'March 10, 2025'
      },
    ]
  },
  {
    title: 'The Monkey',
    director: 'Osgood Perkins',
    year: 2025,
    genres: ['Horror', 'Comedy'],
    runtime: {
      unit: 'Minutes',
      length: 98
    },
    stars: 2,
    entryLogged: 'February 22, 2025',
    review: "Despite the grotesquery, it feels oddly toothless and lacking stakes.",
    comments: [
      {
        username: 'john-trent',
        text: "I also didn't find it particularly funny."
      }
    ]
  },
  {
    title: 'Okja',
    director: 'Bong Joon Ho',
    year: 2017,
    genres: ['Science Fiction', 'Drama', 'Adventure'],
    runtime: {
      unit: 'Minutes',
      length: 122
    },
    stars: 4.5,
    entryLogged: 'January 12, 2025',
    review: null,
    comments: [
      {
        username: 'rj-macready',
        text: 'That moment with the baby superpig at the end gets me every time.',
        date: 'January 13, 2025'
      }
    ]
  }
];


/*
Create a function called longerThanTwoHours that takes in an array of 
movie entry objects as you see above. This function should use the native 
filter method to return a new array of only the movie entry objects that 
have a runtime greater than 2 hours.
*/

function longerThanTwoHours(array){
  
}

/*
Create a function called getMoviesByMonth that takes in an array of movie
objects and a month. This function should use the native filter method to return
a new array of movies that were logged in the input month.
*/

function getMoviesByMonth(array, month){
  
}

          
/*
Create a function called getRuntimes that takes in an array of movie
objects as you see above. This function should use the native 
map method to return a new array of only the runtimes of each film as a string.

example output:
getRuntimes(lbDiary);
// => ['104 minutes', '137 minutes', '98 minutes', '122 minutes']
*/

function getRuntimes(array){
  
}

/*
Create a function called getTitleAndYear that takes in an array of movies.
This function should use the native filter metho to return a new array of
strings. Each string should be the move's title followed by the year in
parenthis.

example output:
getTitleAndYear(movies);
// => ['The Rule of Jenny Pen (2025)', 'Mickey 17 (2025)', 'The Monkey (2025)', 'Okja (2017)']
*/

function getTitleAndYear(movies){
  
}

/*
Create a function called getHorrorTitles that takes in an array of movies.
This function should use the native reduce method to return a new array of
the titles of every movie that has "Horror" in the move genres array.
*/

function getHorrorTitles(movies){
  
}

/*
Create a function called getFirstComments that takes in an array of movies.
This function should use the native reduce method to return a new array of 
strings of the first comment in each movie's reviews array followed by a 
linebreak character. Those strings should include the reviewer's username 
and the review followd by a colon and ending with linebreak character.

example output:
getFirstComment(movies)
// =>  'elizabeth-dane: Loved it!\nelizabeth-dane: NO NOT THE SAUCEEEEEEEEE!!!!!'\n' (... the rest follows the pattern)

*/

function getFirstComments(movies){
  
}

// More advanced examples //
/*
Create a function called getMovieByCommenter that takes in an array of movie objects and a username
of a commenter. This function should use the native filter method to return a new array of movies for
every movie that has a comment made by the input commenter.
*/

function getMoviesByCommenter(movies, commenter){
  
};

/*
Create a function called getLongestComments that takes in an array of movie objects.
This function should use the native map method to return a new array of strings of
the longest comments for each movie. Assume each movie will have a comment, and it 
could include more than one.

example output:
getLongestComments(movies);
// => 
[
  'Rush and Lithgow killed it.',
  'NO NOT THE SAUCEEEEEEEEE!!!!!',
  "I also didn't find it particularly funny.",
  'That moment with the baby superpig at the end gets me every time.'
]
*/

function getLongestComments(movies){
  
}

