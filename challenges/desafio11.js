db.trips.aggregate([
  { $addFields: {
    diaDaSemana: { $dayOfWeek: "$startTime" },
  } },
  { $group: {
    _id: "$diaDaSemana",
    total: { $sum: 1 },
  } },
  { $project: { diaDaSemana: 1, total: 1 } },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
