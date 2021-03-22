db.trips.aggregate([
  { $addFields: {
    diaDaSemana: { $dayOfWeek: "$startTime" },
  } },
  { $match: { diaDaSemana: 5 } },
  { $group: {
    _id: "$startStationName",
    total: { $sum: 1 },
  } },
  { $project: { total: 1 } },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
