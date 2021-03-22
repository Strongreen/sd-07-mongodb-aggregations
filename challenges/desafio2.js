db.movies.aggregate([
  {
    $match: {
      "imdb.rating": {
        $gte: 7,
      },
      genres: {
        $nin: ["Crime", "Horror"],
      },
      rated: {
        $in: ["PG", "G"],
      },
      $and: [
        { languages: { $eq: "English" } },
        { languages: { $eq: "Spanish" } },
      ],
    },
  },
  {
    $project: {
      _id: 0,
      titulo: "$title",
      avaliacao: "$rated",
      notaIMDB: "$imdb.rating",
      votosIMDB: "$imdb.votes",
      ano: "$year",
    },
  },
]);
