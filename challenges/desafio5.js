db.movies.aggregate([
  {
    $match: {
      countries: { $eq: "USA" },
    },
  },
  {
    $project: {
      _id: 0,
      title: 1,
    },
  },
]);
