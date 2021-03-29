db.trips.aggregate([{
  $match: {
    startTime: {
      $exists: true,
    },
  },
},
{
  $addFields: {
    dia: {
      $dayOfWeek: "$startTime",
    },
  },
},
{
  $group: {
    _id: "$dia",
    total: {
      $sum: 1,
    },
  },
},
{
  $sort: {
    total: -1,
  },
},
{
  $project: {
    _id: 0,
    diaDaSemana: "$_id",
    total: "$total",
  },
},
{
  $limit: 1,
},
]);
