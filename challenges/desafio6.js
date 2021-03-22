db.movies.aggregate([
  {
    $match: {
      awards: { $regex: /^Won/ }, // ^ para maiusculo e minusculo
    },
  },
  {
    $group: {
      _id: null,
      maiorValor: {
        $max: "$imdb.rating",
      },
      menoValor: {
        $min: "$imdb.rating",
      },
      media: {
        $avg: "$imdb.rating",
      },
      desvioPadrao: {
        $stdDevSamp: "$imdb.rating",
      },
    },
  },
  {
    $project: {
      _id: 0,
      maior_rating: "$maiorValor",
      menor_rating: "$menoValor",
      media_rating: {
        $round: ["$media", 1],
      },
      desvio_padrao: {
        $round: ["$desvioPadrao", 1],
      },
    } },
]);
