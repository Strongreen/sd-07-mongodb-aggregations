const challengeThree = [
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
