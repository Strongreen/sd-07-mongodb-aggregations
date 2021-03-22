db.trips.aggregate([
  {
    $match: { birthYear: { $or: [{ $exists: true }, { $not: { $eq: "" } }] } },
  },
  {
    $group: {
      _id: "",
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: {
      _id: 0,
      maiorAnoNascimento: 1,
      menorAnoNascimento: 1,
    },
  },
]);
