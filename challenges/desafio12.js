db.trips.aggregate([
  { $group: { _id: { $dayOfWeek: "$startTime" }, total: { $sum: "$endStationName" } } },
  { $sort: { total: -1 } },
  { $project: { _id: 0, diaDaSemana: "$_id", dia: "$endStationName", total: "$total" } },
  { $limit: 5 },
]);
