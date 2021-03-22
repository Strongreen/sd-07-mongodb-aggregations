db.movies.aggregate(
  [
    {
      $match: {
        $and: [
          { "imdb.rating": { $gte: 7 } },
          { genres: { $elemMatch: { $not: { $in: ["Crime", "Horror"] } } } },
          { rated: { $in: ["PG", "G"] } },
          { languages: { $eq: ["English", "Spanish"] } },
        ],
      },
    },
  ],
);
