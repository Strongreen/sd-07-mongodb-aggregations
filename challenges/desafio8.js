db.air_alliances.aggregate([
  { $lookup: {
    from: "air_routes",
    localField: "airlines",
    foreignField: "airline.name",
    as: "newField",
  } },
  { $unwind: "$newField" },
  { $match: {
    "newField.airplane": { $in: ["380", "747"] },
  } },
  { $group: {
    _id: "$name",
    totalRotas: { $sum: 1 },
  } },
  { $sort: {
    totalRotas: -1,
  } },
  { $limit: 1 },
]);
