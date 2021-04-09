db.movies.aggregate([
  {
    $match: {
      awards: {
        $regex: /won.*oscar/i,
      },
    },
  },
  {
    $group: {
      _id: null,
      highest_rating: {
        $max: "$imdb.rating",
      },
      lowerst_rating: {
        $min: "$imdb.rating",
      },
      average_rating: {
        $round: [{
          $avg: "$imdb.rating",
        }, 1],
      },
      standard_deviation: {
        $round: [{
          $stdDevSamp: "$imdb.rating",
        }, 1],
      },
    },
    $project: {
      _id: 0,
      highest_rating: 1,
      lowerst_rating: 1,
      average_rating: 1,
      standard_deviation: 1,
    },
  },
]);
