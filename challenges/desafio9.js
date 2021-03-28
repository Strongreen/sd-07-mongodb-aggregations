db.trips.aggregate([
  {
    $match: {
      birthYear: { $ne: "", $exists: true },
    },
  },
  {
    $addFields: {
      birthYearInt: { $toInt: "$birthYear" },
    },
  },
  {
    $group: {
      _id: null,
      menorAnoNascimento: { $min: "$birthYearInt" },
      maiorAnoNascimento: { $max: "$birthYearInt" },
    },
  },
  {
    $project: {
      _id: 0,
      menorAnoNascimento: 1,
      maiorAnoNascimento: 1,
    },
  },
]);
