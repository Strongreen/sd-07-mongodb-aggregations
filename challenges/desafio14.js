db.trips.aggregate([
  {
    $addFields: {
      duration: { $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 60000] },
    },
  },
  {
    $group: {
      _id: "$bikeid",
      durationAvg: { $avg: "$duration" },
    },
  },
  {
    $project: {
      bikeId: "$_id",
      averageDuration: { $ceil: "$durationAvg" },
      _id: 0,
    },
  },
  {
    $sort: { averageDuration: -1 },
  },
  {
    $limit: 5,
  },
]);
