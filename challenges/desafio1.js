db.movies.aggregate([
  {
    $match: {
      $or: [
        { "genres": ["Crime"] },
        { "genres": ["Horror"] },
        { "rated": ["PG"] },
        { "rated": ["G"] },
      ],
      $and: [
        { "imdb.rating": { $lte: 7 } },
        { "languages": ["English", "Spanish"] },
      ]
    }
  }
]);
