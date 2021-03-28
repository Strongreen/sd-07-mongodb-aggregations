db.trips.aggregate([
  { $match: { startTime: { $exists: true, $ne: "" } } },
  { $addFields: { diaDaSemana: { $dayOfWeek: "$startTime" } } },
  {
    $group: {
      _id: { diaDaSemana: "$diaDaSemana", nomeEstacao: "$startStationName" },
      qtd: { $sum: 1 },
    },
  },
  { $project: { _id: 0, nomeEstacao: "$_id.nomeEstacao", total: "$qtd" } },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
