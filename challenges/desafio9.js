db.trips.aggregate([
  { $match: { $and: [{ birthYear: { $exists: 1 } }, { birthYear: { $ne: "" } }] } },
  { $group:
    { _id: null,
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: "$birthYear" } } },
  { $project: { _id: 0, maiorAnoNascimento: "$maiorAnoNascimento", menorAnoNascimento: 1 } },
]);
