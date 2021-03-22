db.trips.aggregate([
  {
    $addFields: {
      duracaoMs: {
        $subtract: ["$stopTime", "$startTime"],
      },
    },
  },
  {
    $addFields: {
      duracaoPorcentoH: {
        $divide: ["$duracaoMs", 3.6e+6],
      },
    },
  },
  {
    $group: {
      _id: "$usertype",
      duracaoMedia: { $avg: "$duracaoPorcentoH" },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: {
        $round: ["$duracaoMedia", 2],
      },
    },
  },
]);
