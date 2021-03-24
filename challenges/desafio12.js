use("aggregations");
const diaMaiorViagens = db.trips.aggregate([
  {
    $match: {
      startTime: {
        $exists: true,
      },
    },
  },
  {
    $addFields: {
      dia: {
        $dayOfWeek: "$startTime",
      },
    },
  },
  {
    $group: {
      _id: "$dia",
      total: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      total: -1,
    },
  },
  {
    $project: {
      _id: 0,
      diaDaSemana: "$_id",
      total: "$total",
    },
  },
  {
    $limit: 1,
  },
]);

const newResult = diaMaiorViagens.toArray()[0];

db.trips.aggregate([
  {
    $match: {
      startTime: {
        $exists: true,
      },
    },
  },
  {
    $addFields: {
      dia: {
        $dayOfWeek: "$startTime",
      },
    },
  },
  {
    $match: {
      dia: {
        $eq: newResult.diaDaSemana,
      },
    },
  },
  {
    $group: {
      _id: "$startStationName",
      total: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      total: -1,
    },
  },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id",
      total: "$total",
    },
  },
  {
    $limit: 1,
  },
]);
