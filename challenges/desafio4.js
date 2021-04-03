db.movies.aggregate(
  [
    {
      $project: {
        tamanho: { $size:{ $split: [ "$title", " " ] } },
        title_split: "$title"
      },
    },
    {
      $match: {
        tamanho: 1
      },
    },
    { $project: { tamanho: 0, _id: 0 } },
    { $sort: { title_split: 1 } },
  ],
);
