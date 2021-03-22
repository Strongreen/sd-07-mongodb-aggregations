db.restaurants.aggregate(
  [ { $match: { "imdb.rating": { $lt: 5 } } } ]
)