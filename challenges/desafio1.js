db.movies.aggregate(
[
  {
    $match: {
      $and: [
        { "imdb.rating": {$gte: 7}},
        {genres: {$elemMatch: {$in: ["Crime", "Horror"]}}},
        {rated: {$elemMatch: {$in: ["PG", "G"]}}},
        {languages: {$elemMatch: {$in: ["English", "Spanish"]}}}
      ]
    }
  }
])