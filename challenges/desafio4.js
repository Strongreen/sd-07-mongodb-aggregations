db.movies.aggregate(
  [
    {
      $project: {
        title_split: { $split: ["$title", " "] },
      },
    },
    {
      $match: {
        title_split: { $size: 1 },
      },
    },
    { $project: { title_split: 0, _id: 0 } },
    { $sort: { title: 1 } },
  ],
);
