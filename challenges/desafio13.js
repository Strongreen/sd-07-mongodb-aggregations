db.trips.aggregate([
  {
    $match: {
      $and: [
        { startTime: { $gte: ISODate("2016-03-10") } },
        { startTime: { $lt: ISODate("2016-03-11") } },
      ],
    },
  },
  {
    $group: {
      _id: null,
      tempoViagem: {
        $avg: {
          $sum: {
            $divide: [
              { $subtract: ["$stopTime", "$startTime"] }, 60000,
            ],
          },
        },
      },
    },
  },
  {
    $project: {
      _id: false,
      duracaoMediaEmMinutos: { $ceil: "$tempoViagem" },
    },
  },
]);
