/** @format */

db.trips.aggregate([
  {
    $group: {
      _id: { $dayOfWeek: { $max: "$startTime" } },
      total: { $sum: 1 },
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
    $sort: {
      total: -1,
    },
  },
  {
    $limit: 1,
  },
]);
