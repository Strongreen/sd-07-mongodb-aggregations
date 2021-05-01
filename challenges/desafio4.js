db.movies.aggregate([
  {
    $addFields:
    {
      teste_split: { $split: ["$title", " "] },
    },
  },
  {
    $match:
    {
      teste_split: { $size: 1 },
    },
  },
  {
    $sort: { title: -1 },
  },
]);
