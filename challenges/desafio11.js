db.trips.aggregate([
  {
    $addFields: {
      diaDaSemana: { $dayOfWeek: "$startTime" },
    },
  },
  {
    $group: {
      _id: "$diaDaSemana",
      dias: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: "$_id",
      total: "$dias",
    },
  },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
