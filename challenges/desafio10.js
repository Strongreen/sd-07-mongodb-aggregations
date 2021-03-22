db.getCollection("trips")
  .aggregate([
    {
      $group: {
        _id: "$usertype",
        duracaoM: { $avg: { $subtract: ["$stopTime", "$startTime"] } },
      },
    },
    {
      $project: {
        _id: 1,
        duracaoD: { $divide: ["$duracaoM", 3600000] },
      },
    },
    {
      $project: {
        _id: 0,
        tipo: "$_id",
        duracaoMedia: { $round: ["$duracaoD", 2] },
      },
    },
  ]);
