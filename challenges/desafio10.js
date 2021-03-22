db.getCollection("trips")
  .aggregate(
    { $group: {
      _id: "$usertype",
      duracaoMedia:
        { $avg:
          { $subtract: ["$stopTime", "$startTime"] },
        },
    },
    },
    { $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: { $round: ["$duracaoMedia", 2] },
    },
    },
    { $sort: { duracaoMedia: 1 } },
  );
