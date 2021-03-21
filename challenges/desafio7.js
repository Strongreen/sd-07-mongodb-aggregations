db.movies.aggregate([
  { $match: { cast: { $exists: true }, languages: "English" } },
  { $unwind: "$cast" },
  { $group: {
    _id: "$cast",
    numeroFilmes: { $sum: 1 },
    mediaIMDB: { $avg: "$imdb.rating" } },
  },
  { $sort: { numeroFilmes: -1, _id: -1 } },
  { $project: { numeroFilmes: 1, _id: 1, mediaIMDB: { $round: ["$mediaIMDB", 1] } },
  },
]);
