db.trips.aggregate([
  { $group: { _id: "$bikeid", duracaoMedia: { $avg: { $subtract: ["$stopTime", "$startTime"] } } } },
  { $project: { _id: 0, bikeId: "_id", duracaoMediaEmMinutos: { $ceil: [{ $divide: ["$duracaoMedia", 60000] }] } } },
  { $sort: { duracaoMediaEmMinutos: -1 } },
  { $limit: 5 },
]);
