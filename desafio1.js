const challengeOne = [
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      genres: { $nin: ["Crime", "Horror"] },
      rated: { $in: ["PG", "G"] },
      $and: [
        { languages: { $eq: "English" } },
        { languages: { $eq: "Spanish" } },
      ],
    },
  },
];

db.movies.aggregate(challengeOne);
