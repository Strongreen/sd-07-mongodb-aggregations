const convertMillisegundosMinutos = 1 * 60 * 1000;
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
      duracaoMedia: {
        $round: [{
          $divide: [
            "$tempoMedio", convertMillisegundosMinutos,
          ],
        },
        2,
        ],
      },
    },
  },
]);

use("aggregate");
db.trips.find();
