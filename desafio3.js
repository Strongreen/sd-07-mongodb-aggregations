const challengeThree = [
  {
    $match: {
      $and: [
        { "imdb.rating": { $gte: 7 } },
        { genres: { $nin: ["Crime", "Horror"] } },
        { rated: { $in: ["PG", "G"] } },
        { languages: "English" },
        { languages: "Spanish" },
      ],
    },
  },
  {
    $project: {
      titulo: "$title",
      avaliado: "$rated",
      notaIMDB: "$imdb.rating",
      votosIMDB: "$imdb.votes",
      ano: "$year",
      _id: 0,
    },
  },
  {
    $sort: {
      ano: -1,
      avaliado: -1,
      titulo: 1,
    },
  },
];

db.movies.aggregate(challengeThree);
