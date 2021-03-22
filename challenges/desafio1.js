db.movies.aggregate([
  {
    $match: {
      $or: [
        { genre: ["Crime"] },
        { genre: ["Horror"] },
        { rated: ["PG"] },
        { rated: ["G"] },
      ],
      $and: [
        { "imdb.rating": { $lte: 7 } },
        { languages: ["English", "Spanish"] },
      ],
    },
  },
]);
