db.trips.aggregate([
  { $group: { _id: { $dayOfWeek: ISODate("$startTime") }, total: { $sum: 1 } } },
]);
