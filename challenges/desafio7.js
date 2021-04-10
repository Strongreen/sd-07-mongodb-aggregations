db.movies.aggregate([
  {
    $match: {
      languages: "English",
    },
  },
  { $unwind: "$cast" },
  {
    $group: {
      _id: "$cast",
      mediaIMDB: {
        $avg: "$imdb.rating",
      },
      numeroFilmes: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      numeroFilmes: -1,
      cast: -1,
    },
  },
  {
    $project: {
      _id: 1,
      numeroFilmes: 1,
      mediaIMDB: {
        $round: ["$mediaIMDB", 1],
      },
    },
  },
]);
