db.movies.aggregate([
  {
    $set: { num_fav_array: {
      $setIntersection: [
        [
          "Sandra Bullock",
          "Tom Hanks",
          "Julia Roberts",
          "Kevin Spacey",
          "George Clooney",
        ],
        "$cast",
      ] },
    } },
  { $set: { num_fav: { $size: "$num_fav_array" } } },
  {
    $match: {
      countries: "USA",
      "tomatoes.viewer.rating": { $gte: 3 },
    },
  },
  {
    $sort: {
      num_favs: -1,
    },
  },
]);
