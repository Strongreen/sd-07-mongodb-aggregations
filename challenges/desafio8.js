use("aggregations");
db.air_alliances.aggregate([
  {
    $unwind: "$airlines",
  },
  {
    $lookup: {
      from: "air_routes",
      localField: "airlines",
      foreignField: "airline.name",
      as: "routes",
    },
  },
  {
    $unwind: "$routes",
  },
  {
    $match: {
      $or: [{ "routes.airplane": "747" }, { "routes.airplane": "380" }],
    },
  },
  {
    $group: {
      _id: "$name",
      totalRoutes: { $sum: 1 },
    },
  },
  { $sort: { totalRoutes: -1 } },
  { $limit: 1 },
]);
