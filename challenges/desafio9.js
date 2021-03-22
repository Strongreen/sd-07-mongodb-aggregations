db.trips.aggregate(
  [
    {
      $match: {
        $and: [
          { birthYear: { $exists: true } },
          { birthYear: { $not: { $eq: "" } } },
        ],
      },
    },
    {
      $group: {
        _id: null,
        maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
        menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
      },
    },
  ],
);
