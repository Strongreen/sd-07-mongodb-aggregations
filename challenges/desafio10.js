const hour = 60 * 60 * 1000;
use("aggregations");
db.trips.aggregate([
  { $group: {
    _id: "$usertype",
    duracaoMedia: { $avg: { $sum: { $divide: [
      { $subtract: ["$stopTime", "$startTime"] },
      hour,
    ] } } } } },
  { $project: { duracaoMedia: { $round: ["$duracaoMedia", 2] } } },
  { $sort: { duracaoMedia: 1 } },
]);
