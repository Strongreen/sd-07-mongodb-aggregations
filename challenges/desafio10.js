db.trips.aggregate([
  {
    $match: {
      usertype: { $exists: true, $not: "" },
    },
  },
  {
    $group: {
      _id: "$usertype",
      duracao_media: { $avg: { $subtract: ["$stopTime", "$startTime"] } },
    },
  },
  {
    $group: {
      _id: {
        tipo: "$_id",
        duracao_media_em_horas: { $divide: ["$duracao_media", 3600000] },
      },
    },
  },
  {
    $sort: { duracaoMedia: 1 },
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
