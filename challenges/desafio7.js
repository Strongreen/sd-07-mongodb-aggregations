db.movies.aggregate([
  {
    $match: {
      languages: {
        $eq: "English",
      },
    },
  },
  {
    $unwind: "$cast",
  },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: {
        $sum: 1,
      },
      mediaIMDB: {
        $avg: "$imdb.rating",
      },
    },
  },
  {
    $project: {
      numeroFilmes: true,
      mediaIMDB: {
        $round: [
          "$mediaIMDB", 2,
        ],
      },
    },
  },
  {
    $sort: {
      numeroFilmes: -1,
      _id: -1,
    },
  },
]);
