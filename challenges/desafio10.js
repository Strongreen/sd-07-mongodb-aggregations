db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      tempoMedio: {
        $avg: {
          $subtract: [
            "$stopTime", "$startTime",
          ],
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: {
        $round: [{
          $divide: [
            "$tempoMedio", 1 * 60 * 60 * 1000,
          ],
        },
        2,
        ],
      },
    },
  },
]);
