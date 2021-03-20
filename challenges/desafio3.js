db.movies.aggregate([
  {
    $sort: {
      year: -1,
      "imdb.rating": 1,
    },
  },
  {
    $match: {
      "imdb.rating": { $gte: 7 },
    },
  },
  {
    $match: {
      genres: { $ne: "Horror" },
    },
  },
  {
    $match: {
      genres: { $ne: "Crime" },
    },
  },
  {
    $match: {
      $or: [
        { rated: "PG" },
        { rated: "G" },
      ],
    },
  },
  {
    $match: {
      languages: {
        $all: [
          "English",
          "Spanish",
        ],
      },
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
