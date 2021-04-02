db.trips.aggregate([
  {
    $match: {
      $and: [
        { birthYear: { $nin: ["", null, undefined] } },
        { birthYear: { $exists: true } },
      ],
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
