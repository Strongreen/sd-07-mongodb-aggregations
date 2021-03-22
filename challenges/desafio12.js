db.trips.aggregate([
  {
    $group: {
      _id: { weekDay: { $dayOfWeek: "$startTime" }, stationName: "$startStationName" },
      total: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id.stationName",
      total: 1,
    },
  },
  {
    $sort: { total: -1 },
  },
  {
    $limit: 1,
  },
]);
