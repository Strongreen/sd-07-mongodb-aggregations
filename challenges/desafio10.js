db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      media: { $avg: { $subtract: ["$stopTime", "$startTime"] } },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: {
        $round: [{ $multiply: [{ $divide: ["$media", 86400000] }, 24] }, 2],
      },
    },
  },
]);
