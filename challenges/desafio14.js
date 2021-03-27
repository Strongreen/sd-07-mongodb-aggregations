const convert = 1000 * 60;
db.trips.aggregate([
  {
    $group: {
      _id: "$bikeid",
      media: {
        $avg: {
          $subtract: ["$stopTime", "$startTime"],
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      bikeid: "$_id",
      duracaoMediaEmMinutos: { $ceil: [{ $divide: ["$media", convert] }] },
    },
  },
  { $sort: { duracaoMediaEmMinutos: -1 } },
  { $limit: 5 },
]);
