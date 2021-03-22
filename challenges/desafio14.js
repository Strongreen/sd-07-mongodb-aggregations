db.trips.aggregate([
  {
    $match: {
      startTime: {
        $gte: ISODate("2016-03-10T00:00:00Z"),
        $lt: ISODate("2016-03-11T00:00:00Z"),
      },
    },
  },
  {
    $group: {
      _id: "$bikeid",
      media: {
        $avg: {
          $subtract: ["$stopTime", "$startTime"],
        },
      },
    },
  },
  {
    $limit: 5,
  },
  {
    $sort: {
      _id: -1 },
  },
  {
    $project: {
      _id: 0,
      bikeId: "$_id",
      duracaoMedia: {
        $round: [{ $divide: ["$media", 60000] }, 0], // minuto para milessegundos
      },
    },
  },
]);
