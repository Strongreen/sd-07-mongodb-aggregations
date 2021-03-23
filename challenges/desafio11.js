db.trips.aggregate([
  {
    $addFields: {
      diaDaSemana: {
        $dayOfWeek: "$startTime",
      },
    },
  },
  {
    $group: {
      _id: "$diaDaSemana",
      total: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      _id: 0,
      total: 1,
      diaDaSemana: "$_id",
    },
  },
  {
    $sort: { total: -1 },
  },
  {
    $limit: 1,
  },
]);
