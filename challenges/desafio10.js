db.trips.aggregate([
  {
    $project: {
      tipo: "$usertype",
      duracao: {
        $divide: [
          { $subtract: ["$stopTime", "$startTime"] },
          1000 * 60 * 60,
        ],
      },
    },
  },
  {
    $group: {
      _id: "$tipo",
      duracaoMedia: { $avg: "$duracao" },
    },
  },
  {
    $project: {
      tipo: "$_id",
      duracaoMedia: { $round: ["$duracaoMedia", 2] },
    },
  },
  {
    $sort: {
      duracaoMedia: 1,
    },
  },
]);
