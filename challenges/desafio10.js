use("aggregations");

db.trips.aggregate([
  {
    $addFields: {
      duration: {
        $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 60 * 60 * 1000],
      },
    },
  },
  {
    $group: {
      _id: "$usertype",
      durationAvg: {
        $avg: { $subtract: "$duration" },
      },
    },
  },
  {
    $project: {
      _id: 0, tipo: "$_id", duracaoMedia: "$durationAvg",
    },
  },
]);
