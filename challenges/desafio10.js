db.trips.aggregate([
  { $group: { _id: "$usertype", duracaoMedia: { $avg: { $subtract: ["$stopTime", "$startTime"] } } } },
  { $project: { _id: 1, duracaoMedia: { $round: [{ $divide: ["$duracaoMedia", 60 * 60000] }, 2] } } },
]);
