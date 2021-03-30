/* Referencia VitorAmorims */
db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      duracaoMedia: { $avg: { $subtract: ["$stopTime", "$startTime"] } },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: {
        $round: [{ $multiply: [{ $divide: ["$duracaoMedia", 86400000] }, 24] }, 2],
      },
    },
  },
  { $sort: { duracaoMedia: 1 } },
]);
