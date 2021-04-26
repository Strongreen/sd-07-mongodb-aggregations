db.trips.aggregate([
  {
    $set: {
      data: { $concat: [
        { $substr: [{ $dayOfMonth: "$startTime" }, 0, 2] }, "-",
        { $substr: [{ $month: "$startTime" }, 0, 2] }, "-",
        { $substr: [{ $year: "$startTime" }, 0, 4] },
      ] },
      totalHourSpent: {
        $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 60000] },
    },
  },
  {
    $group: {
      _id: "$bikeid",
      soma: { $avg: "$totalHourSpent" },
    },
  },
  {
    $project: {
      _id: 0,
      bikeId: "$_id",
      duracaoMedia: { $round: "$soma" },
    },
  },
  {
    $sort: {
      duracaoMedia: -1,
    },
  },
  {
    $limit: 5,
  },
]);
