db.trips.aggregate([
  {
    $addFields: {
      duracao: {
        $subtract: ["$stopTime", "$startTime"],
      },
    },
  },
  {
    $group: {
      _id: "$bikeid",
      media: { $avg: "$duracao" },
    },
  },
  {
    $project: {
      media_sem_aredondar: {
        $divide: ["$media", 60000],
      },
    },
  },
  {
    $project: {
      _id: 0,
      bikeId: "$_id",
      duracaoMediaEmMinutos: {
        $ceil: "$media_sem_aredondar",
      },
    },
  },
  {
    $sort: {
      duracaoMediaEmMinutos: -1,
    },
  },
  {
    $limit: 5,
  },
]);
