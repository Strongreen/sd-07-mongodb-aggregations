db.trips.aggregate(
  [
    {
      $match: {
        birthYear: { $ne: "", $exists: true },
      },
    },
    {
      $group: {
        _id: null,
        maiorAnoNascimento: { $max: { $toInt: "$birthYearInt" } },
        menorAnoNascimento: { $min: { $toInt: "$birthYearInt" } },
      },
    },
    {
      $project: {
        _id: 0,
        maiorAnoNascimento: 1,
        menorAnoNascimento: 1,
      },
    },
  ],
);
