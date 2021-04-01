db.trips.aggregate([
  {
    $match: {
      birthYear: { $nin: ["", null, undefined] },
    },
  },
  {
    $group: {
      _id: 0,
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
]);
