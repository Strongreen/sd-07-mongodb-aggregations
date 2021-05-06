db.movies.aggregate([
  {
    $match: {
      languages: { $eq: "English" },
    },
  },
  { $unwind: "$cast" },
  {
    $group: {
      id: "$cast",
      mmedia_rating: { $avg: "$imdb.rating" },
      numeroFilmes: { $sum: 1 },
    },
  },
  {
    $sort: {
      numeroFilmes: -1,
      _id: -1,
    },
  },
  {
    $project: {
      id: 1,
      numeroFilmes: 1,
      mediaIMBD: { $round: ["$media_rating", 1] },
    },
  },
]);
