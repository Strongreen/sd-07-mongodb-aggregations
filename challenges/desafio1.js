db.movies.aggregate([
  {
    $match: {
      $and: [
        { "imdb.rating": 7 },
        { genres: { $nin: ["Crime", "Horror"] } },
        { rated: { $in: ["PG", "G"] } },
        { languages: { $all: ["English", "Spanish"] } },
      ],
    },
  },
]);
