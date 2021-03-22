db.trips.aggregate([
  { $group: {
    _id: "$usertype",
    duracaoMedia: {
      $avg: { $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 1000 * 60 * 60] },
    },
  } },
  { $project: { tipo: "$_id", _id: 0, duracaoMedia: { $round: ["$duracaoMedia", 2] } } },
]);
