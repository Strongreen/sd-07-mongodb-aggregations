db.movies.aggregate([
  { $match: { languages: { $eq: "English" } } },
  { $unwind: "$cast" },
  { $group: { _id: "$cast", numeroFilmes: { $sum: 1 }, totalIMDB: { $sum: "$imdb.rating" } } },
  { $project: { numeroFilmes: true, mediaIMDB: { $round: { $multiply: ["$totalIMDB", "$numeroFilmes"] } } } },
  { $sort: { numeroFilmes: -1, _id: -1 } },
]);
