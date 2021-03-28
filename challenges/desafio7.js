db.movies.aggregate([
  {
    $match: {
      cast: {
        $exists: true,
      },
      languages: {
        $exists: true,
        $in: ["English"],
      },
    },
  },
  {
    $unwind: "$cast",
  },
  {
    $group: {
      _id: "$cast",
      quantFilmes: { $sum: 1 },
      mediaIMDB: { $avg: "$imdb.rating" },
    },
  },
  {
    $sort: {
      _id: -1,
      quantFilmes: -1,
    },
  },
  {
    $project: {
      _id: 1,
      quantFilmes: 1,
      mediaIMDB: {
        $round: ["$mediaIMDB", 1],
      },
    },
  },
]);
