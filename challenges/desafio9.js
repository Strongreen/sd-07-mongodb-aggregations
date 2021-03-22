db.getCollection("trips")
  .aggregate(
    { $match: {
      birthYear: { $gt: 0 },
    },
    },
    { $project: {
      year: "$birthYear",
      matcher: "match",
    },
    },
    { $group: {
      _id: "$matcher",
      maiorAnoNascimento: { $max: "$year" },
      menorAnoNascimento: { $min: "$year" },
    },
    },
    { $project: {
      maiorAnoNascimento: 1,
      menorAnoNascimento: 1,
    },
    },
  );
