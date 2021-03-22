db.getCollection("air_alliances")
  .aggregate(
    {
      $unwind: "$airlines",
    },
    {
      $lookup: {
        from: "air_routes",
        localField: "airlines",
        foreignField: "airline.name",
        as: "union",
      },
    },
    {
      $unwind: "$union",
    },
    { $match:
      { $or:
        [
          { "union.airplane": "747" },
          { "union.ariplane": "380" },
        ],
      },
    },
    { $group:
      {
        _id: "$name",
        totalRotas: { $sum: 1 },
      },
    },
    { $sort: { totalRotas: -1 } },
    { $limit: 1 },
  );
