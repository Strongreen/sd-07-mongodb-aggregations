db.trips.aggregate([
  { $match: {
    startTime: { $gte: ISODate("2016-03-10T00:00:00.0Z"), $lt: ISODate("2016-03-11T00:00:00.0Z") },
  } },
  { $addFields: {
    duracaoEmMinutos: { $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 60000] },
  } },
  { $group: {
    _id: null,
    duracaoMediaEmMinutos: { $avg: "$duracaoEmMinutos" },
  } },
  { $project: {
    _id: 0,
    duracaoMediaEmMinutos: { $ceil: "$duracaoMediaEmMinutos" },
  } },
]);
