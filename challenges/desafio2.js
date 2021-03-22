db.movies.aggregate(
  [
    {
      $match: {
        $and: [
          { "imdb.rating": { $gte: 7 } },
          { genres: { $not: { $all: ["Crime", "Horror"] } } },
          { rated: { $in: ["PG", "G"] } },
          { languages: { $all: ["English", "Spanish"] } },
        ],
      },
    },
    {
      $project: {
        _id: 0,
        titulo: "$title",
        avaliado: "$rated",
        notaIMDB: "$imdb.rating",
        votos: "$imdb.votes",
        ano: "$year",
        rating: "$imdb.rating",
        generos: "$genres",
        classificao: "$rated",
        lingua: "$languages",
      },
    },
  ],
);
