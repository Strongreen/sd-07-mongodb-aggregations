db.trips.aggregate([
  {
    $match: {},
  },
  {
    $group: {
      _id: "$usertype",
      tempo: { $avg: { $subtract: ["$stopTime", "$startTime"] } },
    },
  },
  {
    $project: {
      tipo: "$_id",
      horas: { $divide: ["$tempo", 60 * 60 * 1000] },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: 1,
      horas: { $round: ["$horas", 2] },
    },
  },
  {
    $sort: {
      horas: 1,
    },
  },
]);
