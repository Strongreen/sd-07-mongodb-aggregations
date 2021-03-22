db.getCollection("trips")
  .aggregate(
    {
      $project: {
        startDay: { $dayOfWeek: "$startTime" },
        startStationName: 1,
      },
    },
    {
      $group: {
        _id: {
          day: "$startDay",
          nomeEstacao: "$startStationName",
        },
        total: { $sum: 1 },
      },
    },
    { $sort: { total: -1 } },
        {
      $project: {
        _id: 0,
        nomeEstacao: "$_id.nomeEstacao",
        total: "$total",
      },
    },
    { $limit: 1 },
  );
