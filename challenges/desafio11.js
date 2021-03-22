db.trips.aggregate([
  {
    $addFields: {
      diaDaSemana: {
        $max: {
          $dayOfWeek: "$startTime",
        },
      },
    },
  },
  {
    $group: {
      _id: "$diaDaSemana",
      total: { $sum: 1 },
    },
  },
  {
    $sort: {
      diaDaSemana: -1,
    },
  },
  { $limit: 1 },
  { $project: { diaDaSemana: "$_id", _id: 0, total: 1 } },
]);
