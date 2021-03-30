db.movies.aggregate([
  {
    $unwind: "$cast",
  },
  {
    $match: {
      languages: { $all: ["English"] },
    },
  },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: { $sum: 1 },
      mediaIMDB: { $avg: "$imdb.rating" },
    },
  },
  {
    $project: {
      _id: 1,
      numeroFilmes: "$numeroFilmes",
      mediaIMDB: { $round: ["$mediaIMDB", 1] },
    },
  },
  { $sort: {
    numeroFilmes: -1,
    _id: -1,
  } },
]);
