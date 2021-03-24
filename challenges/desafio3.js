db.movies.aggregate([{
  $match: {
    "imdb.rating": { $gte: 7 },
    genres: { $nin: ["Horror", "Crime"] },
    $or: [{ rated: "PG" }, { rated: "G" }],
    languages: { $all: ["English", "Spanish"] },
  },
},
{
  $project: {
    titulo: "$title",
    avaliado: "$rated",
    notaIMDB: "$imdb.rating",
    votosIMDB: "$imdb.votes",
    ano: "$year",
    _id: 0,
  },
},
{
  $sort: { ano: -1, notaIMDB: -1, titulo: 1 },
},
]);
