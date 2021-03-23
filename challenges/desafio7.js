db.movies.aggregate([
  {
    $unwind: "$cast",
  },
  {
    $match: {
      languages: {
        $in: ["English"],
      },
    },
  },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: { $sum: 1 },
      media: { $avg: "$imdb.rating" },
    },
  },
  {
    $project: {
      numeroFilmes: 1,
      mediaIMDB: { $round: ["$media", 1] },
    },
  },
  {
    $sort: {
      numeroFilmes: -1,
      _id: -1,
    },
  },
]);
