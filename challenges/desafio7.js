db.movies.aggregate([
  { $match: { $and: [{ languages: { $exists: 1 } }, { languages: { $all: ["English"] } }] } },
  { $unwind: "$cast" },
  { $group: { _id: "$cast", numeroFilmes: { $sum: 1 }, mediaIMDB: { $avg: "$imdb.rating" } } },
  { $project: { _id: "$_id", numeroFilmes: 1, mediaIMDB: { $round: ["$mediaIMDB", 1] } } },
  { $sort: { numeroFilmes: -1, _id: -1 } },
]);
