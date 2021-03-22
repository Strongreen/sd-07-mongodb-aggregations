db.movies.aggregate(
  [
    {
      $match: {
        languages: "English",
        "imdb.rating": { $exists: true },
      },
    },
    {
      $unwind: "$cast",
    },
    {
      $group: {
        _id: "$cast",
        numeroFilmes: { $sum: 1 },
        mediaIMDB: { $avg: "$imdb.rating" },
      },
    },
    {
      $sort: { numeroFilmes: -1 },
    },
    {
      $project: {
        numeroFilmes: "$numeroFilmes",
        mediaIMDB: { $round: ["$mediaIMDB", 1] },
      },
    },
  ],
);
// FEITO POR THADEU CASTELO BRANCO RAMOS
