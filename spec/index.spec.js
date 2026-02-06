describe("Higher Order Function Practice", () => {

  describe("longerThanTwoHours()", () => {
    it('should return a new array of the films that are longer than 2 hours', () => {
      expect(longerThanTwoHours(movies)).to.deep.equal([
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
      ])
    });
  });

  describe("getMoviesByMonth()", () => {
    it('should return a new array of the films logged in March', () => {
      expect(getMoviesByMonth(movies, 'March')).to.deep.equal([
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
        }
      ]);
    });
  });

  describe("getRuntimes()", () => {
    it('should return a new array of runtimes', () => {
      expect(getRuntimes(movies)).to.deep.equal([
        '104 minutes', 
        '137 minutes', 
        '98 minutes', 
        '122 minutes'
      ]);
    });
  });

  describe("getTitleAndYear", () => {
    it('should return a new array of strings with the title and year', () => {
      expect(getTitleAndYear(movies)).to.deep.equal([
        'The Rule of Jenny Pen (2025)', 
        'Mickey 17 (2025)', 
        'The Monkey (2025)', 
        'Okja (2017)'
      ])
    });
  });

  describe("getHorrorTitles", () => {
    it('should return a new array of the titles of the horror films',  () => {
      expect(getHorrorTitles(movies)).to.deep.equal([
        "The Rule of Jenny Pen",
        "The Monkey"
      ]);
    });
  });

  describe("getFirstComment()", () => {
    it('should return a new array of the first comment', () => {
      expect(getFirstComments(movies)).to.deep.equal(
        "elizabeth-dane: Loved it!\nelizabeth-dane: NO NOT THE SAUCEEEEEEEEE!!!!!\njohn-trent: I also didn't find it particularly funny.\nrj-macready: That moment with the baby superpig at the end gets me every time.\n"
      );
    });
  });

  describe("getMoviesByCommenter", () => {
    it('should return a new array for every movie that has a comment by the input commenter', () => {
      expect(getMoviesByCommenter(movies, 'elizabeth-dane')).to.deep.equal([
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
        }
      ]);
    })
  });

  describe("getLongestComments", () => {
    it('should return an array of the longest comments using the map method', () => {
      expect(getLongestComments(movies)).to.deep.equal([
        'Rush and Lithgow killed it.',
        'NO NOT THE SAUCEEEEEEEEE!!!!!',
        "I also didn't find it particularly funny.",
        'That moment with the baby superpig at the end gets me every time.'
      ])
    })
  });
  
});

