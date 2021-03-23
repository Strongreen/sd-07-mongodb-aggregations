db.air_routes.aggregate([
  { $match: {
    airplane: {
      $in: ["380", "747"],
    },
  },
  },
  { $lookup: {
    from: "air_alliances",
    localField: "airline.name",
    foreignField: "airlines",
    as: "routes_info",
  },
  },
  { $unwind: "$routes_info" },
  { $group: {
    _id: "$routes_info.name",
    totalRotas: { $sum: 1 },
  } },
  { $sort: { totalRotas: -1 } },
  { $limit: 1 },
]);
