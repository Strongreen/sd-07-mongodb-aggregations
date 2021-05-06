db.movies.aggregate([
  {
    $match: {
      and: [
        { awards: { $regex: /^Won/i } },
        { awards: { $regex: /^Oscar/i } },
      ],
    },
  },
  {
    $group: {
      id: null,
      maior_rating: { $max: "$imdb.rating" },
      menor_rating: { $min: "$imdb.rating" },
      mmedia_rating: { $avg: "$imdb.rating" },
      desvio_padrao: { $stdDevSamp: "$imdb.rating" },
    },
  },
  {
    $project: {
      id: 0,
      maior_rating: 1,
      menor_rating: 1,
      media_rating: { $round: ["$media_rating", 1] },
      desvio_padrao: { $round: ["$desvio_padrao", 1] },
    },
  },
]);
