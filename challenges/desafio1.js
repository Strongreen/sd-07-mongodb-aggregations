db.movies.aggregate(
  [
    {
      $match: {
        "imdb.rating": { $gte: 7 },
        genre: { $nin: ["Crime", "Horror"] },
        rated: { $in: ["PG", "G"] },
        $and: [{ languages: "English" }, { languages: "Spanish" }],
      },
    },
  ],
);
