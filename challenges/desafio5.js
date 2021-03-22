const favorites = ["Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney"];
db.getCollection("movies")
  .aggregate([
    {
      $match: {
        countries: "USA",
        "tomatoes.viewer.rating": { $gte: 3 },
        cast: { $exists: true },
      },
    },
    {
      $addFields: {
        new_favs: { $size: { $setIntersection: [favorites, "$cast"] } },
      },
    },
    {
      $sort: {
        new_favs: -1,
        "tomatoes.viewer.rating": -1,
        title: -1,
      },
    },
    {
      $skip: 24,
    },
    {
      $limit: 1,
    },
    {
      $project: {
        _id: 0,
        titulo: "$title",
      },
    },
  ]);
