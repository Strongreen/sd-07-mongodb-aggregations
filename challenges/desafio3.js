db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      genres: {
        $not: { $in: ["Crime", "Horror"] },
      },
      rated: { $in: ["PG", "G"] },
      $and: [
        { languages: { $in: ["English"] } },
        { languages: { $in: ["Spanish"] } },
      ],
    },
  },
  {
    $sort: {
      year: -1,
      "imdb.rating": -1,
      title: 1,
      _id: 1,
    },
  },
  {
    $project: {
      _id: 0,
      titulo: "$title",
      avaliado: "$rated",
      notaIMDB: "$imdb.rating",
      votosIMDB: "$imdb.votes",
      ano: "$year",
    },
  },
]);
