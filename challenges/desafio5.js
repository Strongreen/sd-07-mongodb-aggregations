db.movies.aggregate([
  {
    $match: {
      countries: "USA",
      "tomatoes.viewer.rating": {
        $gte: 3,
      },
      cast: {
        $exists: true,
        $in: [
          "Sandra Bullock",
          "William K.L. Dickson",
          "Tom Hanks",
          "Julia Roberts",
          "Kevin Spacey",
          "George Clooney",
        ],
      },
    },
  },
  {
    $addFields: {
      num_favs: {
        $size: {
          $setIntersection: [
            [
              "Sandra Bullock",
              "William K.L. Dickson",
              "Tom Hanks",
              "Julia Roberts",
              "Kevin Spacey",
              "George Clooney",
            ],
            "$cast",
          ],
        },
      },
    },
  },
  {
    $sort: { num_favs: -1, "tomatoes.viewer.rating": -1, title: -1 },
  },
  {
    $skip: 24,
  },
  {
    $project: {
      _id: 0,
      title: 1,
    },
  },
  {
    $limit: 1,
  },
]);
