db.trips.aggregate([
  {
    $addFields: {
      day: {
        $dayOfWeek: "$startTime",
      },
    },
  },
  {
    $group: {
      _id: "$day",
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      diaDaSemana: "$_id",
      total: "$count",
      _id: 0,
    },
  },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
