db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      genres: { $nin:
          ["Crime", "Horror"],
      },
      rated: { $in: ["G", "PG"] },
      $and: [
        { languages: "English" },
        { languages: "Spanish" },
      ],
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
