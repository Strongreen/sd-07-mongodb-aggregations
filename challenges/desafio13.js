db.trips.aggregate(
  [
    {
      $match: {
        startTime: {
          $gte: ISODate("2016-03-10"),
          $lt: ISODate("2016-03-11"),
        },
      },
    },
    {
      $group: {
        _id: null,
        media: {
          $avg: {
            $divide: [
              {
                $subtract: ["$stopTime", "$startTime"],
              },
              60000, // milisegundo em minuto
            ],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        duracaoMediaEmMinutos: { $ceil: "$media" },
      },
    },
  ],
);
