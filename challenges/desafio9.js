db.trips.aggregate([
  { $match: { birthYear: { $ne: "" } } },
  { $addFields: { $toInt: "$bYear" } },
  { $group: {
    _id: null,
    maiorAnoNascimento: { $max: "$bYear" },
    menorAnoNascimento: { $min: "$bYear" },
  } },
  { $project: { id: 0, maiorAnoNascimento: 1, menorAnoNascimento: 1 } },
]);
