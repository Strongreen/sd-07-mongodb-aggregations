db.movies.aggregate([
  {
    $match: { awards: { $exists: true } },
  },
]);
